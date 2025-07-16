import React, { useState } from 'react'
import Header from '../Component/Header'
const Home = () => {
  const [isHovered, setIshovered] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[url('\landscape.jpg')]">
        <div className='flex-col flex min-h-screen justify-center items-center  '>
          <h2 className='text-3xl text-black text-center w-200 bg-white/1'>
            "Travel isn’t always pretty. It isn’t always comfortable. But that’s okay. The journey changes you."
            </h2>
            <div
            onMouseEnter={() => setIshovered(true)}
            onMouseLeave={() => setIshovered(false)}
            >
              
              
            <button className=' font-bold text-3xl border-white border-2 rounded-2xl px-4 py-1 hover:text-white cursor-pointer hover:px-6 duration-250 bg-white/20 mt-3'>locations</button>
            <div className={` absolute bg-white/40 rounded-1.5x transition-all duration-700 overflow-hidden ${isHovered ? 'w-64 opacity-100 visible':'w-0 opacity-0 max-h-0 invisible' }`}>
              <ul className=''>
                <li className='mt-0.5 mb-0.5 mr-2 ml-2 border-1 px-6 py-1 hover:bg-white/50 font-bold'>japan</li>
                <li className='mt-0.5 mb-0.5 mr-2 ml-2 border-1 px-6 py-1 hover:bg-white/50 font-bold'>indonesia</li>
                <li className='mt-0.5 mb-0.5 mr-2 ml-2 border-1 px-6 py-1 hover:bg-white/50 font-bold'>korea</li>
                <li className='mt-0.5 mb-0.5 mr-2 ml-2 border-1 px-6 py-1 hover:bg-white/50 font-bold'>china</li>                
              </ul>
            </div>
            </div>
            <div>

              
            </div>
        </div>
        <Header/>
    </div>
  )
}

export default Home