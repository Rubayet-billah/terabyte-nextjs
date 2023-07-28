import RootLayout from "@/layout/RootLayout";
import React from "react";

const MonitorPage = () => {
  return <div>Monitor page</div>;
};

export default MonitorPage;
MonitorPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
