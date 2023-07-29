import { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectComponent } from "@/redux/features/pcBuilder/pcBuilderSlice";
import { useRouter } from "next/router";

const ProductSelectCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedComponents = useSelector(
    (state) => state.pcBuilder.selectedComponents
  );
  const [isComponentSelected, setIsComponentSelected] = useState(false);

  const handleAddToBuilder = () => {
    dispatch(
      selectComponent({
        category: product.category.toLowerCase(),
        component: product,
      })
    );
    router.push(`/pc-builder`);
  };

  useEffect(() => {
    // Check if the component is already selected in the Redux store
    setIsComponentSelected(
      selectedComponents[product.category.toLowerCase()]?._id ===
        product?._id || false
    );
  }, [selectedComponents, product]);
  return (
    <div
      className={`p-4 border ${
        isComponentSelected ? "border-blue-500" : "border-gray-200"
      } rounded-lg shadow-md`}
    >
      <div className="flex items-center space-x-4">
        <div className="h-20 w-20 bg-gray-200 rounded-lg flex-shrink-0">
          {product?.image && (
            <img className="w-full" src={product?.image} alt="cpu" />
          )}
        </div>
        <div className="w-full">
          <p className="text-xl font-bold text-gray-800">{product?.name}</p>
          <div className="flex justify-between w-full">
            <p className="text-lg text-gray-600">{product?.description}</p>
            <p className="text-lg font-bold text-gray-800">${product?.price}</p>
          </div>
        </div>
        <div>
          <button
            className={`btn ${
              isComponentSelected ? "btn-primary" : "btn-secondary"
            }`}
            onClick={handleAddToBuilder}
            disabled={isComponentSelected}
          >
            {isComponentSelected ? "Selected" : "Choose"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectCard;
