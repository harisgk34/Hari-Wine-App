import React, { useState } from 'react';
import Minis from "./Product/Minis";
import RedWine from "./Product/RedWine";
import RoseWine from "./Product/RoseWine";
import SparklingWine from "./Product/SparklingWine";
import Subcription from "./Product/Subcription";
import WightWine from "./Product/WightWine";

// Your component definitions


function Product() {
  const buttons = ["Minis", "RedWine", "RoseWine", "SparklingWine", "Subscription", "WhiteWine"];

  // State to track the active component
  const [activeComponent, setActiveComponent] = useState(null);

  // Function to render the active component based on the selected button
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Minis':
        return <Minis />;
      case 'RedWine':
        return <RedWine />;
      case 'RoseWine':
        return <RoseWine/>;
      case 'SparklingWine':
        return <SparklingWine/>;
      case 'Subscription':
        return <Subcription  />;
      case 'WhiteWine':
        return <WightWine  />;
      default:
        return null;
    }
  };

  return (
    <div>
      {buttons.map((item, index) => (
        <button 
          key={index} 
          onClick={() => setActiveComponent(item)} 
          className="bg bg-pink-500 mr-2 p-2 m-2 hover:bg-slate-400"
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













