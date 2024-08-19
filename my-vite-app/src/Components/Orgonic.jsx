import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Orgonic = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="grid grid-cols-[2fr_1fr] grid-flow-col-[1fr 1fr]">
      <div className="relative">
        <img
          src="./Images/Organic.webp"
          alt="Organic"
          className=" m-4 p-10 h-5/5 w-full"
        />
        <h1 className="text- text-9xl absolute  left-1/4 top-1/3 text-white border-2 shadow-xl ">
          Zero <br /> Pesticides
        </h1>
      </div>
      <div className="p-4 m-10">
        <h1 className="text-4xl font-bold font-sans mb-8 ">
          Good and committed wines!
        </h1>

        <small className=" font-bold text-slate-500">
          Our organic wines are designed hand in hand with Oé winegrowers who
          are aware of their role and impact, certified in organic farming. Our
          mission is to transform agriculture,{" "}
          <strong>
            consumption and business in the service of Good while offering
            organic,
          </strong>{" "}
          vegan and zero pesticide wines.
        </small>


{/* The paraGraph 1 */}


        {/* <div className=" mt-8 ">
          <div className="text-2xl font-bold mb-8"> </div>
          <button onClick={toggleOpen} className="flex items-center">
            <div className="flex justify-between py-2 my-2 w-full border-y-2 pr-4 shadow-md ">
              <span className=" mr-28 px-2 mx-3 ">
                The Oé winegrowers {isOpen ? "" : ""}
              </span>
              <div className="text-sm font-medium   ">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={` transition-transform ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
          </button>

          {isOpen && (
            <small className=" text-sm text-slate-500">
              With the team, we work hand in hand with winegrowers present
              throughout France to offer you the best of organic wine. It is
              with Marie-Paule, Corinne, Claire & Stéphane, Brice, Valérie &
              Alexi, Denis, Emmanuel, François, Pascal & Nico, Mickaël &
              Stéphane that we develop these delicious vintages that we can't
              wait to make you discover.
            </small>
          )}
        </div> */}

{/* The paraGraph 2 */}



{/* Brand Images */}

<div className="flex justify-between mt-10">
  <img src="./Images/g.webp" alt="brand1" />
  <img src="./Images/g2.webp" alt="brand2" />
  <img src="./Images/Group1.webp" alt="brand3" />
</div>


<button className=" my-10 p-3 border-2 border-slate-500 font-sans hover:bg-[#111827] hover:text-white">
  Our Mission
</button>



      </div>
    </div>
  );
};

export default Orgonic;


// Use this for paraGraph 2

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// const ExpandableSections = () => {
//   const [isOpen1, setIsOpen1] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);

//   const toggleOpen1 = () => {
//     setIsOpen1(!isOpen1);
//   };

//   const toggleOpen2 = () => {
//     setIsOpen2(!isOpen2);
//   };

//   return (
//     <div className="mt-8">
//       {/* First Expandable Section */}
//       <div className="text-2xl font-bold mb-8">Section 1</div>
//       <button onClick={toggleOpen1} className="flex items-center">
//         <div className="flex justify-between py-2 my-2 w-full border-1 shadow-md">
//           <span className="mr-28 px-2 mx-3">
//             The Oé winegrowers {isOpen1 ? "" : ""}
//           </span>
//           <div className="text-sm font-medium">
//             <FontAwesomeIcon
//               icon={faChevronDown}
//               className={`transition-transform ${isOpen1 ? "rotate-180" : "rotate-0"}`}
//             />
//           </div>
//         </div>
//       </button>
//       {isOpen1 && (
//         <small className="text-sm text-slate-500">
//           With the team, we work hand in hand with winegrowers present throughout France to offer you the best of organic wine. It is with Marie-Paule, Corinne, Claire & Stéphane, Brice, Valérie & Alexi, Denis, Emmanuel, François, Pascal & Nico, Mickaël & Stéphane that we develop these delicious vintages that we can't wait to make you discover.
//         </small>
//       )}

//       {/* Second Expandable Section */}
//       <div className="text-2xl font-bold mt-8 mb-8">Section 2</div>
//       <button onClick={toggleOpen2} className="flex items-center">
//         <div className="flex justify-between py-2 my-2 w-full border-1 shadow-md">
//           <span className="mr-28 px-2 mx-3">
//             Our Philosophy {isOpen2 ? "" : ""}
//           </span>
//           <div className="text-sm font-medium">
//             <FontAwesomeIcon
//               icon={faChevronDown}
//               className={`transition-transform ${isOpen2 ? "rotate-180" : "rotate-0"}`}
//             />
//           </div>
//         </div>
//       </button>
//       {isOpen2 && (
//         <small className="text-sm text-slate-500">
//           At our core, we believe in the importance of sustainability and quality. We strive to maintain the highest standards in every aspect of our wine production, from vineyard management to the final bottling process.
//         </small>
//       )}
//     </div>
//   );
// };

// export default ExpandableSections;
