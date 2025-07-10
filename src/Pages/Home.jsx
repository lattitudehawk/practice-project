import React from 'react'
import Header from '../Component/Header'
const Home = () => {
  return (
    <div className="min-h-screen w-full bg-[url('C:\Users\Dell\Desktop\project\project_a\src\assets\graphics\landscape.jpg')]">
        <div className='flex min-h-screen justify-center items-center'>
          <h2 className='text-3xl text-black text-center w-200 bg-white/1'>
            "Travel isn’t always pretty. It isn’t always comfortable. But that’s okay. The journey changes you."
            </h2>
        </div>
        <Header/>
    </div>
  )
}

export default Home