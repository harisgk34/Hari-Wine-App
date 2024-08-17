import React from "react";
import Icons from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";
import { FaThumbsUp } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

const Serice = () => {
  return (
    <div className="bg-[#EAE1D4] ">
      <div className="p-10 py-20 w-screen flex justify-center ">
        <div className="p-2  bg-white  py-20 rounded-lg shadow-2xl">
          <div className="w-full flex justify-between">
            <h1 className="text-xl font-bold font-sans p-2  ">
              What we <br /> believe
            </h1>
            <p className="font-thin text-xs p-2 m-2">
              VINES ACCOUNT FOR 4% OF AGRICULTURE <br /> IN FRANCE BUT 20% OF
              PESTICIDE USE
            </p>
          </div>
          <strong className="flex  justify-end mr-4">
            IT'S TIME FOR CHANGE
          </strong>
          <iframe
            className=" bg-white p-5"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/20hDc_gJN2I"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* icons components */}


      <div className="flex justify-center ">

      <div>
        <Icons
          head={"Organic Wine"}
          Icon={
            <FontAwesomeIcon
              icon={faMartiniGlassCitrus}
              style={{ color: "#050505", fontSize: "40px" }}
            />
          }
          para={
            "Our wines are pesticide-free and produced hand-in-hand with Oé winemakers across France"
          }
        />
      </div>
      
        <div className="" >
          <Icons
            head={"Service"}
            Icon={
              <FaThumbsUp className="w-full flex justify-center" style={{ color: "#050505", fontSize: "40px" }} />
            }
            para={
              "Our wines are pesticide-free and produced hand-in-hand with Oé winemakers across France"
            }
          />
        </div>
        <div >
          <Icons
            head={"Delivery"}
            Icon={
              <MdLocalShipping className="w-full flex justify-center" style={{ color: "#050505", fontSize: "40px" }} />
            }
            para={
              "Our wines are pesticide-free and produced hand-in-hand with Oé winemakers across France"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Serice;
