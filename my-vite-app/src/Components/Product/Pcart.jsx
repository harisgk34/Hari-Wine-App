import React from 'react'

const Pcart = () => {
  return (
    <div> 
        <div className="p-2 m-2 flex-col items-center justify-center w-70">
            <img src="/Images/Pcart-red1.webp" alt="wine" className="" style={{width:"420px"}} />
            <p className="text-gray-500 ">⭐⭐⭐⭐⭐ 25 reviews</p>
            <h1 className="text-xl font-bold">Lorem ipsum dolor <b className=" flex items-end justify-en">$499</b> </h1>
            <p className="text-sm font-mono">Lorem ipsum dolor sit.</p>
            <button className="text-white  bg-gray-900 p-2 px-24 items-center flex justify-center text  w-full" style={{}}> + ADD TO CART</button>
        </div>

    </div>
  )
}

export default Pcart