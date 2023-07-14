export default function StaticPage({cartData}) {
    console.log(cartData);
    return (
        <div>   
           <h3>{cartData.title}</h3>
           <p>{cartData.body}</p>
        </div>
    )
}


export async function getStaticProps() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/5')
    const cartData = await res.json()

    return {
        props: {
            cartData
        }
    }
}