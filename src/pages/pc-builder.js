import RootLayout from "@/layout/RootLayout";
import React from "react";

const PcBuilderPage = () => {
  return (
    <div>
      <h1>Pc Builder page</h1>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
