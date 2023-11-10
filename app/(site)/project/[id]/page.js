import Image from 'next/image';
import React from 'react'

const Details = () => {
  return (
    <>
    <div className='pt-[150px] max-w-screen-xl mx-auto'>
   
    <div class="sm:mb-10 lg:grid lg:grid-cols-5 md:grid-cols-none bg-[#020312] lg:h-full">
     
      <div class="hidden relative lg:block  lg:col-span-3">
         <Image
                width={1400}
                height={400}
                class="rounded-[10px] p-[5px] card-imgae"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
      </div>

       <div class=" px-10  max-w-md m-auto lg:col-span-2   shadow-xl rounded-xl  md:shadow-xl md:rounded-xl lg:shadow-none lg:rounded-none lg:w-full  lg:px-5  lg:max-w-lg bg-[#020312]">
        
        <h1 class="mt-5 font-bold text-lg ">You can school from home!</h1>
        <h1 class="font-bold text-lg text-gray-600">Get started today!</h1>
        <h1 class="text-lg text-gray-600 text-justify pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
        <h1 class="text-lg text-gray-600 text-justify pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos assumenda quas inventore nulla, magni esse veritatis quos expedita! Quasi, tenetur!</h1>
       
        <div className="flex justify-between">
          <button class="mt-5 bg-gray-600 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-gray-800">Live stite</button>
          <button class="mt-5 bg-gray-600 p-3 shadow-2xl rounded-xl text-white font-bold hover:bg-gray-800">gitHub Link</button>
        </div>
      </div>

    </div>
    </div>

    </>
  )
}

export default Details;
