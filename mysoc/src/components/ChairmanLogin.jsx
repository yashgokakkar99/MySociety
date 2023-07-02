import React from "react";

function ChairmanLogin() {
  return (
    <div className="border-2 border-red-400 rounded-lg flex justify-center w-80 item-center m-auto p-4">
      <form method="POST">
        <div>
          <div className="flex justify-center font-bold text-red-700">
            Chairman Login
          </div>
          <div className="text-red-700 font-bold mt-4">
            <label for="username">Username</label>
          </div>
          <input
            className="border-2"
            type="text"
            placeholder="alex@123"
            name="username"
            id="username"
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
          ></input>
        </div>
        <div>
          <input
            className="text-red-100 w-[184px] bg-red-400 flex justify-center font-bold  mt-2 rounded-lg hover:bg-red-200 hover:text-red-700"
            type="submit"
            value="Submit"
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ChairmanLogin;