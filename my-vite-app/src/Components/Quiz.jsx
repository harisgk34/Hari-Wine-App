import React from "react";

const Quiz = () => {
  return (
    <div className="flex justify-end mt-32">
        <div>
      <h1 className="text-2xl font-bold font-sans mb-8 ">Find the perfect wine with our four magic questions</h1>
      <p>
        Do you prefer red or white? A lighter or a more powerful wine? Are you
        looking for a gift? We know it’s not always easy to pick the perfect
        bottle. <br/> To help you decide, we’ve devised a quick 30-second
        questionnaire.<br/>  Answer just four questions and we’ll suggest a wine. For
        now, it’s only in French—but check back soon.
      </p>
      <button className="text-white  bg-gray-900 "> Take the quiz</button>
      </div>
      <img  src="/Images/Capture.PNG" alt="image" />
    </div>
  );
};

export default Quiz;
