import Link from 'next/link';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

export default function Home({ data2 }) {
  const [user, setUser] = useState('');
  const { data } = useSWR('https://fakestoreapi.com/products/1', fetcher);
  console.log("data2: ", data2) ;
  console.log("data: ", data);
  useEffect(() => {
    fetch('https://fakestoreapi.com/users/1')
      .then(res => res.json())
      .then(json => setUser(json))
  }, [])

  return (
    <>
      <Link href={`products?id=1`}>A single Product(query param)</Link>
      <h1>Home page</h1>
      {user? <h3>{user.name.firstname} {user.name.lastname}</h3> : "" }
    </>
  )
}

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  // console.log(data);
  return data;
}

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const data2 = await res.json();
  console.log("data");
  return {
    props: {
      data2
    }
  }
}

// export async function getStaticProps() {

//   const res = await fetch('https://jsonplaceholder.typicode.com/posts/5')
//   const cartData = await res.json()

//   return {
//       props: {
//           cartData
//       }
//   }
// }