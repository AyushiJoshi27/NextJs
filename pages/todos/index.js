import { useRouter } from "next/router";

export default function Posts() {
    const router = useRouter();
    console.log(router);
    const {id} = router.query;
    console.log(': ', id);

    return <>
    <h3>Dynamic Router</h3>
    <h3>Pathname: {router.pathname}</h3>
    </>
}