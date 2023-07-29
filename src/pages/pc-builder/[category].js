import ProductSelectCard from "@/components/ProductSelectCard";
import RootLayout from "@/layout/RootLayout";
import React from "react";

const CategoryComponents = ({ products }) => {
  return (
    <div className="py-8 px-4 lg:px-0">
      <div className="text-2xl font-bold mb-4">
        Choose {products[0]?.category}
      </div>
      <section className="grid grid-cols-1 gap-6">
        {products?.map((product) => (
          <ProductSelectCard key={product?.id} product={product} />
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
