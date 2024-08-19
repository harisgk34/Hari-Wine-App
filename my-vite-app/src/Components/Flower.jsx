import React from "react";

const Flower = () => {
  return (
    <div>
      <div  >
        <div className="grid grid-cols-[2fr_1fr] grid-flow-col-[1fr 1fr]" >
          <div className="p-4 m-10  ">
            <h1 className="text-4xl font-bold font-sans mb-8 ">
              Good and committed wines!
            </h1>

            <small className=" font-bold text-slate-500">
              Our organic wines are designed hand in hand with Oé winegrowers
              who are aware of their role and impact, certified in organic
              farming. Our mission is to transform agriculture,{" "}
              <strong>
                consumption and business in the service of Good while offering
                organic,
              </strong>{" "}
              vegan and zero pesticide wines.
            </small>
          </div>
        </div>

        <div className="flex justify  mt-10">
          <img className="mx-5 " src="./Images/g.webp" alt="brand1" />
          <img className="mx-5 " src="./Images/g2.webp" alt="brand2" />
          <img className="mx-5 " src="./Images/Group1.webp" alt="brand3" />
        </div>
     
      </div>
     
    </div>
  );
};

export default Flower;
