import RootLayout from "@/layout/RootLayout";

const ProductDetails = () => {
  return <div>from product details</div>;
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: "" + product?.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products/${params?.productId}`
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
    // revalidate: 30,
  };
};
