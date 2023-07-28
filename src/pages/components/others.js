import RootLayout from "@/layout/RootLayout";
import React from "react";

const OthersPage = () => {
  return <div>Other components</div>;
};

export default OthersPage;
OthersPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
