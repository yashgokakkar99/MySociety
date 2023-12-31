import React from 'react';
import { useState } from 'react';
import axios from 'axios';



function ChairmanReg() {

  const [name,setName] = useState('');
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const handleChairRegister = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:8000/api/register/chairman",{
        name,username,password
      });
      console.log(response.data)
    }catch(error){
      console.log(error);
    }
  }


  return (
    
    <div className="hover:shadow-red-400/70 rounded-lg flex justify-center w-[400px] item-center m-auto mt-24 p-4 shadow-lg shadow-black-500/70">
    <form onSubmit={handleChairRegister}>
      <div>
      <div className="flex justify-center font-bold text-red-700">
          Chairman Registration
        </div>
        <div className="text-red-700 font-bold mt-4">
          <label for="name">Full Name</label>
        </div>
        <input
          className="border-2 w-[250px]"
          type="name"
          placeholder="Alex Watson"
          name="name"
          id="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        ></input>
      </div>
      <div>
        <div className="text-red-700 font-bold">
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
          value="Register as chairman"
        ></input>
      </div>
    </form>
  </div>
  )
}

export default ChairmanReg