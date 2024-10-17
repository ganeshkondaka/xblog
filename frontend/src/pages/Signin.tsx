import React from 'react'
import { Link } from 'react-router-dom'

export const Signin = () => {
  return (
    <div className='flex justify-center items-center bg-slate-800 h-screen'>
        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="md:w-full bg-slate-500 rounded-2xl h-[40rem] flex justify-center items-center flex-col">
            <span className="flex justify-center items-center flex-col w-[23rem] ">
                
              <h2 className="text-white text-8xl font-bold pb-10">🧔</h2>
              <h2 className="text-white text-3xl font-bold pb-10">Sign in</h2>

              <form action="" className="flex flex-col items-center">
                {/* <input type="text" name="" id="" placeholder="name" className="px-7 rounded-full h-16 mb-5 w-[20rem]"/> */}
                <input type="text" name="" id="" placeholder="email" className="px-7 rounded-full h-16 mb-5 w-[20rem]"/>
                <input type="text" name="" id="" placeholder="password" className="px-7 rounded-full h-16 mb-5 w-[20rem]"/>
                {/* <span className="text-gray-300">
                  <input type="checkbox" name="" id="" className="w-8 "></input>By singning up, you agree to our <br /> Terms, Data Policyand Cookies.
                </span> */}
                <button className="bg-blue-600  w-full rounded-full text-white font-bold h-16 mt-10">Sign in </button>
                <p className='mt-7'>Don't have an account..? <Link to={'/signup'} className='text-violet-300'>Signup</Link> </p>
              </form>

            </span>
          </div>
        </div>
    </div>
  )
}
