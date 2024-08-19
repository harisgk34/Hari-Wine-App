import React from "react";

const Food = () => {
  return (
    <div>
      <div className="relative text-white font-sans ">
        <img
          className="m-5 mx-10 p-4 h-fit w-screen"
          src="./Images/food.webp"
          alt="Food-img"
        />

        <div className=" absolute p-6 m-2 top-1/3 right-1/3 shadow-white shadow-xl">
          <h1 className="text-6xl font-bold">Perfect  pairings</h1>
          <p className="text-2xl font-sans font-semibold my-10 text-end">Mediterranean flavors</p>
          <button className="p-3 border-2 hover:bg-white hover:text-black">Find Out More</button>
        </div>
      </div>
    </div>
  );
};

export default Food;
