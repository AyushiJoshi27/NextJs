import { useRouter } from "next/router";

export default function SelectedPidPage() {
 const router = useRouter();
    console.log(router);
    // const {id} = router.query;
    // console.log(id);
    return <h2>Selected Product Page</h2>;
}