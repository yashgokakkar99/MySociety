import React from "react";

function About() {
  return (
    <div className=" w-[600px] m-auto flex p-6 rounded-lg shadow-lg shadow-black-500/70 hover:shadow-red-400/70 mt-24 bg-red-100">
      <div className="flex justify-start font-brush text-lg">
        Name: Yash Ashok Gokakkar<br></br>
        Education: B.E Computer Engineering (2024)<br></br>
        Skills: MERN Stack Developer<br></br>
      </div>
      <div className="flex-col justify-end flex-grow">
        <div className="flex justify-end">
          <button className="ml-auto rounded-sm w-32 shadow-lg shadow-black-500/70 text-red-900 hover:font-bold bg-red-200 hover:bg-red-300 hover:shadow-red-400/70 text-lg">Connect</button>
        </div>

        <div className="flex justify-end mt-4">
          <button className="ml-auto rounded-sm w-32 shadow-lg shadow-black-500/70 text-red-900 hover:font-bold bg-red-200 hover:bg-red-300 hover:shadow-red-400/70 text-lg">Resume</button>
        </div>
      </div>
    </div>
  );
}

export default About;
