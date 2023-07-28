import RootLayout from "@/layout/RootLayout";
import React from "react";

const StoragePage = () => {
  return <div>Storage page</div>;
};

export default StoragePage;

StoragePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
