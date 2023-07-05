import React from "react";
import { useState } from "react";
import axios from 'axios';

function UserLogin() {

const [username,setUsername]=useState('');
const [password,setPassword]=useState('');

const handleUserLogin = async(e)=>{
  e.preventDefault();
  try{
    const response = await axios.post("http://localhost:8000/api/login/user",{username,password});
    console.log(response.data);
  }catch(error){
    console.error(error.response.data)
  }
}

  return (
    <div className="border-2 border-red-400 rounded-lg flex justify-center w-80 item-center m-auto p-4">
      <form onSubmit={handleUserLogin}>
        <div>
          <div className="flex justify-center font-bold text-red-700">User Login</div>
          <div className="text-red-700 font-bold mt-4">
            <label for="username">Username</label>
          </div>
          <input
            className="border-2"
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
            className="border-2"
            type="password"
            placeholder="XXXXXXXX"
            name="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <input className="text-red-100 w-[184px] bg-red-400 flex justify-center font-bold  mt-2 rounded-lg hover:bg-red-200 hover:text-red-700" type="submit" value="Submit"></input>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
