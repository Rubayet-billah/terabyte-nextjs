import React from "react";

const ProductCard = ({ product }) => {
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
    featured,
  } = product;

  // Define isNew based on some condition (you can change the condition as needed)
  const isNew = true;

  return (
    <div>
      <div className="card w-96 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            {/* Assuming "NEW" badge is based on some condition */}
            {isNew && <div className="badge badge-secondary">Featured</div>}
          </h2>
          <p>{description}</p>
          <div className="flex justify-between">
            <p className="text-xl text-blue-500 font-bold">${price}</p>
            <p className="text-xl font-bold">{category}</p>
          </div>
          {/* Highlight the category */}
          <div className="card-actions">
            {/* Display the status and individualRating */}
            <div className="badge badge-outline">Status: {status}</div>
            <div className="badge badge-outline">{individualRating}*</div>
            {/* You can display other relevant badges here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
