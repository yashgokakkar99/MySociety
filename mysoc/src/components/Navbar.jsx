import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky bg-red-200 fixed w-full flex">
      <div className="flex items-center w-1/5 px-12 font-bold text-red-900 text-4xl font-brush">mysoc.in</div>
      <div className="flex justify-end w-4/5 space-x-2 p-2">
        <Link
          className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-36 h-12 flex justify-center"
          to={"/"}
        >
          Home
        </Link>
        <Link
          className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-36 h-12 flex justify-center"
          to={"/society"}
        >
          Society
        </Link>
        <Link
          className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-36 h-12 flex justify-center"
          to={"/about"}
        >
          About
        </Link>
        <Link
          className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-36 h-12 flex justify-center"
          to={"/contact"}
        >
          Contact
        </Link>
        {/* <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/userreg"}>
        User Reg
      </Link>
      <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/chairreg"}>
        Chairman Reg
      </Link>
      <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/userlog"}>
        User Login
      </Link>
      <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/chairlog"}>
        Chairman Login
      </Link> */}
        <Link
          className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-36 h-12 flex justify-center"
          to={"/userlog"}
        >
          Sign in (User)
        </Link>
        <Link
          className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-40 h-12 flex justify-center"
          to={"/chairlog"}
        >
          Sign in (Chairman)
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
