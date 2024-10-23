import axios from 'axios'
import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Signin = () => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()

  const user = {
    username, password
  }
  const handle_submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!username || !password) {
      return console.error("please fill the input forms");
    }
    try {
      const response = await axios.post("https://backend.ganeshcoursera1122.workers.dev/api/v1/user/signin", user)
      const jwt = await response.data.jwt;
      const user_name = await response.data.user_name;
      if (!jwt) {
        console.log("invalid data from frontend")
      }
      console.log(jwt,'user name is',user_name)
      localStorage.setItem('token', jwt)
      localStorage.setItem('loggedin_user', user_name)
      
      navigate('/blogs')

    } catch (error) {
      //toast.error
      console.log(error)
    }
  }
  return (
    <div className='flex justify-center items-center bg-slate-800 h-screen'>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="md:w-full bg-slate-500 rounded-2xl h-[40rem] flex justify-center items-center flex-col">
          <span className="flex justify-center items-center flex-col w-[23rem] ">

            <h2 className="text-white text-8xl font-bold pb-10">🧔</h2>
            <h2 className="text-white text-3xl font-bold pb-10">Sign in</h2>

            <form action="" onSubmit={handle_submit} className="flex flex-col items-center">
              {/* <input type="text" name="" id="" placeholder="name" className="px-7 rounded-full h-16 mb-5 w-[20rem]"/> */}

              <input
                type="text"
                name=""
                id=""
                placeholder="email"
                value={username}
                required
                onChange={(e) => setusername(e.target.value)}
                className="px-7 rounded-full h-16 mb-5 w-[20rem]" />

              <input
                type="text"
                name=""
                id=""
                placeholder="password"
                value={password}
                required
                onChange={(e) => setpassword(e.target.value)}
                className="px-7 rounded-full h-16 mb-5 w-[20rem]" />

              {/* <span className="text-gray-300">
                  <input type="checkbox" name="" id="" className="w-8 "></input>By singning up, you agree to our <br /> Terms, Data Policyand Cookies.
                </span> */}
              <button type='submit' className="bg-blue-600  w-full rounded-full text-white font-bold h-16 mt-10">Sign in </button>
              <p className='mt-7'>Don't have an account..? <Link to={'/signup'} className='text-violet-300'>Signup</Link> </p>
            </form>

          </span>
        </div>
      </div>
    </div>
  )
}
