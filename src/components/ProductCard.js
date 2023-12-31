import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const {
    _id,
    name,
    category,
    price,
    status,
    image,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    featured,
  } = product;

  // Define isNew based on some condition (you can change the condition as needed)

  return (
    <Link href={`/products/${_id}`}>
      <div className="card w-96 shadow-xl hover:scale-105 duration-100">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            {/* Assuming "NEW" badge is based on some condition */}
            {featured && <div className="badge badge-secondary">Featured</div>}
          </h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <p className="text-xl text-blue-500 font-bold">${price}</p>
            <p className="text-xl font-bold">{category}</p>
          </div>
          {/* Highlight the category */}
          <div className="card-actions">
            {/* Display the status and individualRating */}
            <div className="badge badge-outline">{status}</div>
            <div className="badge badge-outline">{individualRating}*</div>
            {/* You can display other relevant badges here */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
