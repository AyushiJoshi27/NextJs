import { useRouter } from "next/router";

export default function ProductPage() {
 const router = useRouter();
    console.log(router);
    // const {id} = router.query;
    // console.log(id);
    return <h2>Product page</h2>;
}