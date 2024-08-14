import React from 'react'

const Pcart = () => {
  return (
    <div> 
        <div className="p-2 m-2 flex-col items-center justify-center">
            <img src="/Images/Pcart-red1.webp" alt="wine" className="h-60 " />
            <p className="">25 reviews</p>
            <h1 className="">Lorem ipsum dolor</h1>
            <p className="">Lorem ipsum dolor sit.</p>
            <button className="text-white bg-gray-900 p-2 px-8 hover:bg-slate-300 hover:text-gray-950  "> + ADD TO CART</button>
        </div>

    </div>
  )
}

export default Pcart;