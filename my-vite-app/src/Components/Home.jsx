import React from 'react';
import Navbar from './Navbar';
import Cover from './Cover';
import Product from './Product';
import Pcart from './Product/Pcart';


const Home = () => {
  return (
    <div className="font-cera ">
      {/* <Navbar />
      <Cover/>
      <div className="flex justify-center">
      <Product/>
      </div> */}

      <Pcart/>
      {/* <Product/> */}


 
    </div>
  );
};

export default Home;
