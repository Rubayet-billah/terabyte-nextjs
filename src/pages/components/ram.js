import RootLayout from "@/layout/RootLayout";
import React from "react";

const RamPage = () => {
  return <div>Ram Page</div>;
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
