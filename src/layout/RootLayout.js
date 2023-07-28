import Header from "@/components/Header";

const RootLayout = ({ children }) => {
  return (
    <div className="font-montserrat">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default RootLayout;
