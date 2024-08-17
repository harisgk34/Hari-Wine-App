import React from 'react'


const Icons = (props) => {
  return (
    <div className="p-4 flex-col text-center  ">
      <div className="w-48 m-4 bg-white p-4 rounded-lg shadow-2xl">
        <div className="p-2">{props.Icon}</div>
        <h1 className="text-2xl  placeholder:">{props.head}</h1>
        <p className="text-xs p-4 font-thin  ">{props.para}</p>
        </div>
    </div>
  )
}

export default Icons;