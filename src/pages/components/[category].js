import ProductCard from "@/components/ProductCard";
import RootLayout from "@/layout/RootLayout";
import { useRouter } from "next/router";

const CategoryProductPage = ({ products }) => {
  const router = useRouter();
  const category = router.query.category;
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-12">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default CategoryProductPage;

CategoryProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/products`);
  const products = await res.json();

  // Get unique categories from the products array
  const uniqueCategories = Array.from(
    new Set(products?.data?.map((product) => product.category))
  );

  // Create paths for each category
  const paths = uniqueCategories.map((category) => ({
    params: { category: category.toLowerCase() }, // Assuming the category paths are in lowercase
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const category = params?.category;

  // Fetch products based on the category
  const res = await fetch(`${process.env.URL}/products?category=${category}`);
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};
