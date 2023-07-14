import { useRouter } from "next/router";
import useSWR from 'swr';

export default function ShopPage() {
  const router = useRouter();
    const { data } = useSWR(`https://fakestoreapi.com${router.pathname}/${router.query.id}`, fetcher);
    console.log(data);
  console.log(router.query.id);
  return <div>Shop page</div>;
}

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products/1");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
}
