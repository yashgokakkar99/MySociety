import React from "react";

function Home() {
  return (
    <>
      <div>
        <div className="w-full font-bold font-brush flex-col p-6">
          <div className="flex justify-center text-2xl">
            Prabhat Co-operative Housing Society, RH92/2
          </div>
          <div className="flex justify-center text-sm">
            shahunagar, chinchwad, Pune-411019
          </div>
        </div>
        <div className="w-full text-lg font-brush flex justify-center flex space-x-6">
          <div className="w-[350px] rounded-lg p-2 flex justify-center hover:shadow-red-400/70 shadow-lg shadow-black-500/70 bg-red-100 hover:bg-white hover:font-bold">
            Chairman : Mr. Ashok Gokakkar<br></br>
            Contact : 9527531019
          </div>
          <div className="w-[350px] rounded-lg p-2 flex justify-center hover:shadow-red-400/70 shadow-lg shadow-black-500/70 bg-red-100 hover:bg-white hover:font-bold">
            Treasurer : Mr. Milind Chaudhari<br></br>
            Contact : 7499822665
          </div>
          <div className="w-[350px] rounded-lg p-2 flex justify-center hover:shadow-red-400/70 shadow-lg shadow-black-500/70 bg-red-100 hover:bg-white hover:font-bold">
            Secretary : Mr. Vaijanath Gadgile<br></br>
            Contact : 9850818169
          </div>
        </div>
      </div>
      <div className="flex h-auto p-12 space-x-4 justify-center font-brush text-lg">
        <div className="border-2 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70 hover:shadow-red-400/70">
          <div className="border-2 flex justify-center font-bold">
            Wings : 4
          </div>
          <div className="flex justify-center">Wing A : 14</div>
          <div className="flex justify-center">Wing B : 14</div>
          <div className="flex justify-center">Wing C : 12</div>
          <div className="flex justify-center">Wing D : 14</div>
          <div className="border-2 flex justify-center font-bold">
            Total flats : 54
          </div>
        </div>
        <div className="border-2 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70 hover:shadow-red-400/70">
          <div className="border-2 flex justify-center font-bold">Rentals</div>
          <div className="flex justify-center">Wing A : 0</div>
          <div className="flex justify-center">Wing B : 0</div>
          <div className="flex justify-center">Wing C : 0</div>
          <div className="flex justify-center">Wing D : 0</div>
          <div className="border-2 flex justify-center font-bold">
            Total rentals : 0
          </div>
        </div>
        <div className="border-2 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70 hover:shadow-red-400/70">
          <div className="border-2 flex justify-center font-bold">Location</div>
          <div>
            <iframe
            title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30241.308122200102!2d73.77261797431645!3d18.656656999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b95b60e22d77%3A0x4dfdafe81e82abd0!2sPrabhat%20Society%20RH92%2F2!5e0!3m2!1sen!2sin!4v1688695636594!5m2!1sen!2sin"
              width="364.8px"
              height="auto"
              style={{border:"0"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex h-auto p-12 space-x-4 justify-center font-brush text-lg">
        <div className="hover:bg-green-200 hover:border-green-400 hover:border-4 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70">
          <div className="font-bold">Ambulance</div>
          <div className="font-bold text-2xl">108</div>
        </div>
        <div className="hover:bg-blue-200 hover:border-blue-400 hover:border-4 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70">
          <div className="font-bold">Police</div>
          <div className="font-bold text-2xl">100</div>
        </div>
        <div className="hover:bg-orange-200 hover:border-orange-400 hover:border-4 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70">
          <div className="font-bold">Security</div>
          <div className="font-bold text-2xl">8669531972</div>
        </div>
      </div>
    </>
  );
}

export default Home;
