import React from "react";
import CmtBox from "./CmtBox";
import "./Comments.css"
const Comments = (props) => {
  return (
    <div className="flex">
      <div className="flex-col p-4 m-4 ">
        <div className="flex flex-col ">
          <p className="font-bold text-2xl font-sans p-2 m-2"><small className="font-thin text-yellow-400">⭐⭐⭐⭐{" "}</small> 4.9/5</p>
          <h1 className="font-bold text-4xl font-sans m-2 p-2  ">Lorem ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="cmtcart">
          <CmtBox star={"⭐⭐⭐"}
            head={"Lorem ipsum dolor sit"}
            cmt={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste."
            }
            city={"London"}
          />
            <CmtBox
            star={"⭐⭐⭐⭐"}
            head={" Lorem ipsum dolor sit"}
            cmt={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste."
            }
            city={"London"}
            />

           <CmtBox star={"⭐⭐⭐⭐"}
            head={" Lorem ipsum dolor sit"}
            cmt={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste."
            }
            city={"London"}
          />
              <CmtBox star={"⭐⭐⭐"}
            head={"Lorem ipsum dolor sit"}
            cmt={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, iste."
            }
            city={"London"}
          />
        </div>
      </div>
      <div>
        <img className="h-fit  " src="./Images/Cmt.webp" alt="comment pic" />
      </div>
    </div>
  );
};

export default Comments;

// import React from "react";
// import "./Comments.css";

// const Comments = () => {
//   return (
//     <div className="w-full flex ">
// <div class="image-container relative overflow-hidden w-full h-64">
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 1" class="moving-image w-[20%] h-full absolute" />
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 2" class="moving-image w-[20%] h-full absolute delay-2" />
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 3" class="moving-image w-[20%] h-full absolute delay-4" />
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 4" class="moving-image w-[20%] h-full absolute delay-6" />
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 5" class="moving-image w-[20%] h-full absolute delay-8" />
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 6" class="moving-image w-[20%] h-full absolute delay-10" />
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 7" class="moving-image w-[20%] h-full absolute delay-12" />
//   <img src="/Images/flotting-logo.webp" alt="Floating Logo 8" class="moving-image w-[20%] h-full absolute delay-14" />
// </div>

//     </div>
//   );
// };

// export default Comments;
