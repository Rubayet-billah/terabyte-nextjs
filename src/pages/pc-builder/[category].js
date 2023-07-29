import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layout/RootLayout";
import React from "react";

const CategoryComponents = ({ products }) => {
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

export default CategoryComponents;

CategoryComponents.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const category = params?.category;

  // Fetch products based on the category
  const res = await fetch(
    `http://localhost:5000/products?category=${category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
}
