import React, { useState } from 'react';
import Minis from "./Product/Minis";
import RedWine from "./Product/RedWine";
import RoseWine from "./Product/RoseWine";
import SparklingWine from "./Product/SparklingWine";
import Subcription from "./Product/Subcription";
import WightWine from "./Product/WightWine";
import Cases from "./Product/Cases";

// Your component definitions


function Product() {
  const buttons = ["RedWine", "WightWine", "RoseWine", "Minis", "SparklingWine", "Subcription","Cases"];

  // State to track the active component
  const [activeComponent, setActiveComponent] = useState(null);

  // Function to render the active component based on the selected button
  const renderComponent = () => {
    switch (activeComponent) {
      case 'RedWine':
        return <RedWine/>;
      case 'WightWine':
        return <WightWine />;
      case 'RoseWine':
        return <RoseWine/>;
      case 'Minis':
        return <Minis/>;
      case 'SparklingWine':
        return <SparklingWine/>;
      case 'Subcription':
        return <Subcription />;
        case 'Cases':
          return <Cases/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1 className="p-2m m-2 font-sans font-bold text-black mt-4 text-5xl">Certified Orgonic Wines</h1>
      {buttons.map((item, index) => (
        <button 
          key={index} 
          onClick={() => setActiveComponent(item)} 
          className=" mt-4 text-gray-700 font-thin ml-5 from-neutral-700 p-2 m-2 hover:bg-slate-400"
        >
          {item}
        </button>
      ))}

      <div className="mt-4">
        {renderComponent()}
      </div>
    </div>
  );
}

export default Product;






