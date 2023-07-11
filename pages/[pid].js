import fs from "fs/promises";
import path from "path";

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;

//   if (!loadedProduct) {
//     return <p>loading</p>;
//   }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
}
 
export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product, 
    },
  };
}

// if we use fallback: 'blocking', we do not need fallback check(i.e. if (!loadedProduct) {return <p>loading</p>}) in the component
export async function getStaticPaths() {
  return {
    paths: [{ params: { pid: "p1" } }],
    // fallback: true,
    // paths: [
    //     { params: { pid: "p1" } },
    //     { params: { pid: "p2" } },
    //     { params: { pid: "p3" } },
    // ],
    // fallback: false, 
    fallback: 'blocking',
  };
}
