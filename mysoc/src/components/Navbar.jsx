import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky bg-red-400 fixed  w-full space-x-16 px-10 flex item-center justify-end py-4">
      <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/"}>
        Home
      </Link>
      <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/society"}>
        Society
      </Link>
      <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/about"}>
        About
      </Link>
      <Link className="menu border-2 p-2 hover:bg-red-200 rounded-lg hover:font-bold hover:text-red-700 border-red-900 w-24 flex justify-center" to={"/contact"}>
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
