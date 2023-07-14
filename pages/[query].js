export default function QueryPage({props}) {

    console.log(props)
}


export async function getServerSideProps({ query }) {
    const { userId } = query;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const res = await response.json();
   
    return {
      props: {
       res,
      },
    };
  }
  