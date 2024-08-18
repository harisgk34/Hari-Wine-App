

const CmtBox = (props) => {
  return (
    <div className=" p-2 m-2  border border-spacing-1 bg-[#FFFFFF] mb-1 h-full shadow-2xl ">

        <h1 className="font-bold text-xl m-2"><small className="text-sm font-thin text-yellow-400">{props.star}{" "}</small>{props.head}</h1>
        <p className="m-2 font-sans text-sm">{props.cmt}</p>
        <small className="m-2 font-extrabold">{props.city}</small>
        
    </div>
  )
}

export default CmtBox;