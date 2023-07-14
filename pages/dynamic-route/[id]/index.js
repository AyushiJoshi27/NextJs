import { useRouter } from "next/router";

export default function Dynamic() {
 const router = useRouter();
    console.log(router);
    // const {id} = router.query;
    // console.log(id);
    return <h2>nested Dynamic route</h2>;
}