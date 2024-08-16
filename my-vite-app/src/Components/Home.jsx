import React from 'react';
import Navbar from './Navbar';
import Cover from './Cover';
import Product from './Product';
import Pcart from './Product/Pcart';


const Home = () => {
  return (
    <div className="font-cera ">
      <Navbar />
      <Cover/>

    
      <div className="ml-10">
      <Product/>
      </div>

<div className="flex ">
    <Pcart/>
     <Pcart/>
      <Pcart/>
</div>

    
      {/* <Product/> */}


 
    </div>


    
  );
};

export default Home;
