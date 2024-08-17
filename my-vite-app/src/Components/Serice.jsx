import React from "react";
import Icons from "./Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";

const Serice = () => {
  return (
    <div className="bg-[#EAE1D4] ">
      <div className=" flex-col justify-center text-center items-center">
        <div className="flex justify-between">
          <h1>What we believe</h1>
          <p>
            VINES ACCOUNT FOR 4% OF AGRICULTURE IN FRANCE BUT 20% OF PESTICIDE
            <br />
           <strong className="flex justify-end "> USE IT'S TIME FOR CHANGE</strong>
          </p>
        </div>
        <iframe
          className=" flex text-center "
          width="560"
          height="315"
          src="https://www.youtube.com/embed/20hDc_gJN2I"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="flex">
      <Icons
          head={"Organic Wine"}
          Icon={
            <FontAwesomeIcon
              icon={faMartiniGlassCitrus}
              style={{ color: '#050505', fontSize: '40px' }}
            />
          }
          para={
            "Our wines are pesticide-free and produced hand-in-hand with Oé winemakers across France"
          }
        />

<Icons
          head={"Organic Wine"}
          Icon={
            <FontAwesomeIcon
              icon={faMartiniGlassCitrus}
              style={{ color: '#050505', fontSize: '40px' }}
            />
          }
          para={
            "Our wines are pesticide-free and produced hand-in-hand with Oé winemakers across France"
          }
        />


<Icons
          head={"Organic Wine"}
          Icon={
            <FontAwesomeIcon
              icon={faMartiniGlassCitrus}
              style={{ color: '#050505', fontSize: '40px' }}
            />
          }
          para={
            "Our wines are pesticide-free and produced hand-in-hand with Oé winemakers across France"
          }
        />
      </div>
    </div>
  );
};

export default Serice;
