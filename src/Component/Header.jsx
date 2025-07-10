import React from 'react'
import logo1 from "../assets/graphics/logo.png"
const Header = () => {
  return (
    <div className='absolute flex items-center justify-around top-0 left-0 w-full lg:mt-6'>
        <div className="flex items-center gap-0.5">
        <img src={logo1} alt="Logo" className="h-10 w-auto" />
        <h1 className='font-bold text-white bg-black/20 text-xl'>Treehouse</h1>
      </div>
        <ul className="flex items-center gap-20">
  <li className="border-white border-2 rounded-3xl px-4 py-1 hover:text-white  cursor-pointer hover:px-5 duration-250 ">Home</li>
  <li className="border-white border-2 rounded-3xl px-4 py-1 hover:text-white  cursor-pointer hover:px-5 duration-250 ">Products</li>
  <li className="border-white border-2 rounded-3xl px-4 py-1 hover:text-white  cursor-pointer hover:px-5 duration-250 ">About us</li>
  <li className="border-white border-2 rounded-3xl px-4 py-1 hover:text-white  cursor-pointer hover:px-5 duration-250 ">Contact us</li>
</ul>

        <button>Sign up</button>
    </div>
  )
}

export default Header