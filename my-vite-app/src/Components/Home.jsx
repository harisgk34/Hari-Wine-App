import React from "react";
import Navbar from "./Navbar";
import Cover from "./Cover";
import Product from "./Product";
import Pcart from "./Product/Pcart";
import Quiz from "./Quiz";
import Serice from "./Serice";
import Comments from "./Comments";
import Orgonic from "./Orgonic";

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
        <Serice />
      </div>

      {/* costommers Review */}

      <div>
        <Comments/>
      </div>
      {/* Orgonic */}
      <div>
        <Orgonic/>
      </div>
      
    </div>
  );
};

export default Home;
