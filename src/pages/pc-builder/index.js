import RootLayout from "@/layout/RootLayout";
import React, { useEffect } from "react";
import ComponentInputCard from "@/components/ComponentInputCard";
import { useSelector } from "react-redux";

const PcBuilderPage = () => {
  const { selectedComponents } = useSelector((state) => state.pcBuilder);
  const values = Object.values(selectedComponents);
  const isButtonDisabled = values.some((value) => !value);

  const categories = [
    { name: "CPU", path: "cpu" },
    { name: "Motherboard", path: "motherboard" },
    { name: "RAM", path: "ram" },
    { name: "Power Supply Unit", path: "power-supply" },
    { name: "Storage Device", path: "storage" },
    { name: "Monitor", path: "monitor" },
    { name: "Others", path: "others" },
  ];

  const handleBuildSuccess = () => {
    alert("build successfully done");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">PC Builder</h1>
      <section className="grid gap-5">
        {categories?.map((category, idx) => (
          <ComponentInputCard key={idx} category={category} />
        ))}
      </section>
      <div className="flex justify-center py-5">
        <button
          onClick={() => handleBuildSuccess()}
          type="submit"
          className="btn btn-primary"
          disabled={isButtonDisabled}
        >
          Complete build
        </button>
      </div>
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
