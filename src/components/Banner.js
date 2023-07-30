import React from "react";

const Banner = () => {
  return (
    <div className="my-12">
      <div
        className="hero lg:min-h-[60vh] rounded"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?cs=srgb&dl=pexels-xxss-is-back-777001.jpg&fm=jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 font-montserrat"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase font-montserrat">
              Welcome To Terabyte
            </h1>
            <p className="mb-5">
              Customize and assemble your perfect PC. Choose from a wide range
              of components and create the PC that suits your needs.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
