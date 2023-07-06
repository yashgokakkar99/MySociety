import React from 'react'

function Home() {
  return (
    <>
    <div>
      <div className="w-full font-bold font-brush flex-col p-6">
        <div className='flex justify-center text-2xl'>Prabhat Co-operative Housing Society, RH92/2</div>
        <div className='flex justify-center text-sm'>shahunagar, chinchwad, Pune-411019</div>
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
    <div className='flex h-auto p-12 space-x-4 justify-center font-brush text-lg'>
      <div className='border-2 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70 hover:shadow-red-400/70'>
        <div className='border-2 flex justify-center font-bold'>Wings  : 4</div>
        <div className='flex justify-center'>Wing A : 14</div>
        <div className='flex justify-center'>Wing B : 14</div>
        <div className='flex justify-center'>Wing C : 12</div>
        <div className='flex justify-center'>Wing D : 14</div>
        <div className='border-2 flex justify-center font-bold'>Total flats : 54</div>
      </div>
      <div className='border-2 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70 hover:shadow-red-400/70'>
        <div className='border-2 flex justify-center font-bold'>Rentals</div>
        <div className='flex justify-center'>Wing A : 0</div>
        <div className='flex justify-center'>Wing B : 0</div>
        <div className='flex justify-center'>Wing C : 0</div>
        <div className='flex justify-center'>Wing D : 0</div>
        <div className='border-2 flex justify-center font-bold'>Total rentals : 0</div>
      </div>
      <div className='border-2 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70 hover:shadow-red-400/70'>
        <div className='border-2 flex justify-center font-bold'>Location</div>
      </div>
    </div>
    <div className='flex h-auto p-12 space-x-4 justify-center font-brush text-lg'>
      <div className='hover:bg-green-200 hover:border-green-400 hover:border-4 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70'>
        <div className='font-bold'>Ambulance</div>
        <div className='font-bold text-2xl'>108</div>
      </div>
      <div className='hover:bg-blue-200 hover:border-blue-400 hover:border-4 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70'>
        <div className='font-bold'>Police</div>
        <div className='font-bold text-2xl'>100</div>
      </div>
      <div className='hover:bg-orange-200 hover:border-orange-400 hover:border-4 w-[400px] rounded-lg p-4 shadow-lg shadow-black-500/70'>
        <div className='font-bold'>Security</div>
        <div className='font-bold text-2xl'>8669531972</div>
      </div>
    </div>
    </>
  )
}

export default Home