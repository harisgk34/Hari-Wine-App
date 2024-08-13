import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl">Certified Organic Wines</h1>
      <div className="flex">
        <div onClick className="cursor-pointer">
          Red Wine
        </div>
        <div onClick="">Wight Wine hgjkg</div>
        <div onClick="">Wight Winekh</div>
        <div onClick="">Wight Winejlhj</div>
        <div onClick="">Wight Winekjhjk</div>
        <div onClick="">Wight Winehg</div>
      </div>
    </div>
  );
};

export default Product;
