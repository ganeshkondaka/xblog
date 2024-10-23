import axios from "axios"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Signup = () => {
  const[name,setname]=useState('')
  const[username,setusername]=useState('')
  const[password,setpassword]=useState('')
  
  const navigate=useNavigate()

  const user={
    name,username,password
  }

  const handle_submit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name||!username||!password){
      return console.error("please fill the input forms");
    }
    
    try {
      const response= await axios.post("https://backend.ganeshcoursera1122.workers.dev/api/v1/user/signup",user)
      const jwt= await response.data.jwt;
      const user_name = await response.data.user_name;
      if(!jwt){
        console.log("invalid data from frontend")
      }
      // console.log(jwt)
      localStorage.setItem('token', jwt)
      localStorage.setItem('loggedin_user', user_name)
      navigate('/blogs')

    } catch (error) {
      //toast.error
      console.log(error)
    }
  }
  return (
    <div>
      <div className="h-screen py-10 md:px-20 flex justify-center items-center bg-slate-800">

        <div className="w-[50%] hidden lg:block">
          <span className="flex justify-center flex-col font-bold">
            <p className="text-blue-500 text-3xl pb-10">Register your account</p>
            <h1 className="text-white text-6xl pb-10">Start your journey <br /> by creating an <br /> account</h1>
            <h4 className="text-gray-400 text-lg">the brown fox jumps over the lazy dog</h4>
          </span>
        </div>

        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="md:w-full bg-slate-500 rounded-2xl h-[40rem] flex justify-center items-center flex-col">
            <span className="flex justify-center items-center flex-col w-[23rem] ">
              <h2 className="text-white text-3xl font-bold pb-10">Register Account</h2>

              <form action="" onSubmit={handle_submit} className="flex flex-col items-center">
                <input type="text"
                  name=""
                  id=""
                  placeholder="name"
                  value={name}
                  onChange={(e)=>setname(e.target.value)}
                  required
                  className="px-7 rounded-full h-16 mb-5 w-[20rem]" />

                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="email"
                  value={username}
                  onChange={(e)=>setusername(e.target.value)}
                  required
                  className="px-7 rounded-full h-16 mb-5 w-[20rem]" />
                  
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="password"
                  value={password}
                  onChange={(e)=>setpassword(e.target.value)}
                  required
                  className="px-7 rounded-full h-16 mb-5 w-[20rem]" />

                <span className="text-gray-300">
                  <input type="checkbox" name="" id="" className="w-8 "></input>By singning up, you agree to our <br /> Terms, Data Policyand Cookies.
                </span>
                <button type="submit" className="bg-blue-600  w-full rounded-full text-white font-bold h-16 mt-12">Get Started</button>
                <p className='mt-7'>Already have an account..? <Link to={'/signin'} className='text-violet-300'>Signin</Link> </p>
              </form>

            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
