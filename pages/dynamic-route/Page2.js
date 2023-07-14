import { useRouter } from "next/router";

export default function DynamicIdPage({ data }) {
  const router = useRouter();
  console.log(router);
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

// export async function getStaticProps() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/5");
//   const cartData = await res.json();

//   return {
//     props: {
//       cartData,
//     },
//   };
// }
