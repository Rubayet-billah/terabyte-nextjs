import RootLayout from "@/layout/RootLayout";
import { setProducts } from "@/redux/features/product/productSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// pages/pc-builder.js
import Link from "next/link";
import ComponentInputCard from "@/components/ComponentInputCard";

const PcBuilderPage = () => {
  const categories = [
    { name: "CPU", path: "cpu" },
    { name: "Motherboard", path: "motherboard" },
    { name: "RAM", path: "ram" },
    { name: "Power Supply Unit", path: "power-supply" },
    { name: "Storage Device", path: "storage" },
    { name: "Monitor", path: "monitor" },
    { name: "Others", path: "others" },
  ];

  return (
    <div>
      <h1>PC Builder</h1>
      <section className="grid gap-5">
        {categories?.map((category, idx) => (
          <ComponentInputCard key={idx} category={category} />
        ))}
      </section>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products"); // internal API connected with mongoDB
  const data = await res.json();
  console.log(data.data);
  return {
    props: {
      products: data.data,
    },
    revalidate: 10,
  };
};
