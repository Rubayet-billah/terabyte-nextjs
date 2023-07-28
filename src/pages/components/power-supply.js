import RootLayout from "@/layout/RootLayout";
import React from "react";

const PowerSupplyPage = () => {
  return <div>Power supply page</div>;
};

export default PowerSupplyPage;

PowerSupplyPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
