import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky bg-red-400 fixed h-20 w-full -top-10">
        <Link classNmae="menu" to={"/"}>Home</Link>
        <Link classNmae="menu" to={"/society"}>Society</Link>
        <Link classNmae="menu" to={"/about"}>About</Link>
        <Link classNmae="menu" to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Navbar