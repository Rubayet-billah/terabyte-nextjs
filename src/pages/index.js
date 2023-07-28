import Header from "@/components/Header";
import RootLayout from "@/layout/RootLayout";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <h1>Monserrat font</h1>
    </div>
  );
};

export default Homepage;

Homepage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
