import RootLayout from "@/layout/RootLayout";

const ProductDetails = ({ product }) => {
  const {
    name,
    category,
    price,
    status,
    image,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    reviews,
  } = product;

  return (
    <div>
      <div className="max-w-3xl mx-auto mt-10">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2">
            <img src={image} alt={name} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="text-lg text-gray-600 mt-2">{description}</div>
            <div className="mt-4">
              <span className="text-xl font-bold">${price}</span>
              <span className="text-green-500 ml-2">{status}</span>
            </div>
            <div className="mt-4">
              <span className="text-gray-700 font-bold">Category:</span>{" "}
              {category}
            </div>
            <div className="mt-4">
              <span className="text-gray-700 font-bold">Brand:</span>{" "}
              {keyFeatures?.Brand}
            </div>
            <div className="mt-4">
              <span className="text-gray-700 font-bold">Cores:</span>{" "}
              {keyFeatures?.Cores}
            </div>
            {/* Add more key features as needed */}
            <div className="mt-4">
              <span className="text-gray-700 font-bold">
                Individual Rating:
              </span>{" "}
              {individualRating} out of 5
            </div>
            <div className="mt-4">
              <span className="text-gray-700 font-bold">Average Rating:</span>{" "}
              {averageRating} out of 5
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold">Reviews</h2>
          {reviews?.map((review, index) => (
            <div key={index} className="mt-4">
              <div className="text-lg font-bold">{review?.username}</div>
              <div className="text-gray-600 mt-1">
                Rating: {review?.rating} out of 5
              </div>
              <div className="mt-1">{review?.comment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/products`);
  const products = await res.json();
  const paths = products?.data?.map((product) => ({
    params: { productId: "" + product?._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`${process.env.URL}/products/${params?.productId}`);
  const data = await res.json();
  return {
    props: {
      product: data.data,
    },
    // revalidate: 30,
  };
};
