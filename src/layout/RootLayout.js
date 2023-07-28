import Header from "@/components/Header";

const RootLayout = ({ children }) => {
  return (
    <section className="font-montserrat max-w-[1440px] mx-auto bg-slate-50">
      <Header />
      <main className="min-h-[90vh] px-3 md:px-12">{children}</main>
    </section>
  );
};

export default RootLayout;
