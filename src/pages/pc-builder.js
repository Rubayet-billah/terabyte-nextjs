import RootLayout from "@/layout/RootLayout";
import { setProducts } from "@/redux/features/product/productSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const PcBuilderPage = ({ products }) => {
  const dispatch = useDispatch(); // Initialize useDispatch

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);
  return (
    <div>
      <h1>{products?.length}</h1>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products"); // internal API connected with mongoDB
  const data = await res.json();
  console.log(data.data);
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
