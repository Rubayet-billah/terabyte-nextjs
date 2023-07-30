import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layout/RootLayout";
import { setProducts } from "@/redux/features/product/productSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Homepage = ({ products }) => {
  const dispatch = useDispatch(); // Initialize useDispatch

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Homepage;

Homepage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.URL}/products`); // internal API connected with mongoDB
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
