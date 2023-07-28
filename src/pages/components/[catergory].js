import RootLayout from "@/layout/RootLayout";
import React from "react";

const CategoryProductPage = () => {
  return <div>from categoty</div>;
};

export default CategoryProductPage;

CategoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:5000/api/products`);
  const newses = await res.json();

  const paths = newses?.map((news) => ({
    params: { newsId: "" + news?.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/products/${params?.newsId}`
  );
  const data = await res.json();
  return {
    props: {
      news: data,
    },
    // revalidate: 30,
  };
};
