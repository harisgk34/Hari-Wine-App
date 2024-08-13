
import React from 'react';

function Cover() {
  return (
    <div>
      <div className="pl-3 flex gap-3 relative">
        <img className="max-w-prose" src="/Images/Cover-wine.jpg" alt="cover-img" />
        <img className="" src="/Images/Cover-img2.jpg" alt="cover-img" />
        
        <div className="absolute top-60  text-white flex items-center justify-between w-full pr-10">
          <button className="h-12 ml-5 mt-3 font-medium px-6 border-0 font-sans  bg-white text-black rounded-md hover:text-white hover:bg-gradient-to-b from-[#795C58] via-[#653E39] to-[#2F130F]">
            DISCOVER YOUR WINES
          </button>
          <div className="pl-10">
            <h1 className="font-bold text-4xl ">Regenerative Organic Wines</h1>
            <p className="mr-5 w-fit">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, nam!</p> 
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Cover;
