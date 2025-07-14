import React from 'react'
import Header from '../Component/Header'
const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[url('C:\Users\Dell\Desktop\project\project_a\src\assets\graphics\landscape.jpg')]">
        <div className='flex-col flex min-h-screen justify-center items-center'>
          <h2 className='text-3xl text-black text-center w-200 bg-white/1'>
            "Travel isn’t always pretty. It isn’t always comfortable. But that’s okay. The journey changes you."
            </h2>
            <button className='font-bold text-3xl border-white border-2 rounded-2xl px-4 py-1 hover:text-white cursor-pointer hover:px-6 duration-250 bg-white/20 mt-5'>locations</button>
            <div>
              
            </div>
        </div>
        <Header/>
    </div>
  )
}

export default Home