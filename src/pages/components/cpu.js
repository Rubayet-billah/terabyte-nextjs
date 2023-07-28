import RootLayout from "@/layout/RootLayout";
import React from "react";

const CpuPage = () => {
  return (
    <div>
      <h1>CPU PAGE</h1>
    </div>
  );
};

export default CpuPage;
CpuPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
