import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import Product from "./Product";
import Pcart from "./Product/Pcart";
import Quiz from "./Quiz";
import Serice from "./Serice";

const Home = () => {
  return (
    <div className="font-cera ">
      <Navbar />
      <Cover />

      <div className="ml-10">
        <Product />
      </div>

      <div className="flex ">
        <Pcart />
        <Pcart />
        <Pcart />
      </div>
      <div>
        <Quiz/>
      </div>
      <div>
        <Serice/>
      </div>
    </div>
  );
};

export default Home;
