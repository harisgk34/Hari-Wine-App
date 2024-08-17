import React from 'react'


const Icons = (props) => {
  return (
    <div className="p-4 flex-col text-center" style={{gap:"2px;"}} >
        {/*icon place here */}
        <div >{props.Icon}</div>
       
        <h1 className="text-2xl">{props.head}</h1>
        <p className="text-xs  font-thin  ">{props.para}</p>
    </div>
  )
}

export default Icons;