import React from "react";
import { useState } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

function ChairmanLogin() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');

  const handleChairLogin = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8000/api/login/chairman",{username,password});
      console.log(response.data)
    }catch(error){
      console.error(error.response.data)
    }
  }
  return (
    <div className="hover:shadow-red-400/70 rounded-lg flex justify-center w-[400px] item-center m-auto mt-24 p-4 shadow-lg shadow-black-500/70">
      <form onSubmit={handleChairLogin}>
        <div>
          <div className="flex justify-center font-bold text-red-700">
            Chairman Login
          </div>
          <div className="text-red-700 font-bold mt-4">
            <label for="username">Username</label>
          </div>
          <input
            className="border-2 w-[250px]"
            type="text"
            placeholder="alex@123"
            name="username"
            id="username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          ></input>
        </div>
        <div>
          <div className="text-red-700 font-bold">
            <label for="password">Password</label>
          </div>
          <input
            className="border-2 w-[250px]"
            type="password"
            placeholder="XXXXXXXX"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className="text-red-100 w-[250px] bg-red-400 flex justify-center font-bold  mt-2 rounded-lg hover:bg-red-200 hover:text-red-700"
            type="submit"
            value="Submit"
          ></input>
        </div>
        <Link className="flex justify-center font-bold text-red-700 w-[250px] text-sm mt-4" to={"/chairreg"}>
        New to mysoc? Create an account
      </Link>
      </form>
    </div>
  );
}

export default ChairmanLogin;
