import { selectComponent } from "@/redux/features/pcBuilder/pcBuilderSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ComponentInputCard = ({ category, component }) => {
  const selectedComponents = useSelector(
    (state) => state.pcBuilder.selectedComponents
  );

  console.log("from input pbc", category, component);
  const selectedOne = selectedComponents[category?.name.toLowerCase()];

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-md">
      <p className="text-lg font-bold text-gray-600 mb-2">{category?.name}</p>
      <div className="flex items-center space-x-4">
        <div className="h-20 w-20 bg-gray-200 rounded-lg flex-shrink-0">
          {selectedOne?.image && (
            <img className="w-full" src={selectedOne?.image} alt="cpu" />
          )}
        </div>
        <div className="w-full">
          <p className="text-xl font-bold text-gray-800">{component?.name}</p>
          <div className="flex justify-between w-full">
            <p className="text-lg text-gray-600">{selectedOne?.name}</p>
            <p className="text-lg font-bold text-gray-800">
              ${selectedOne?.price}
            </p>
          </div>
        </div>
        <div>
          <Link href={`/pc-builder/${category?.path}`}>
            <button className="btn btn-primary">Choose</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ComponentInputCard;
