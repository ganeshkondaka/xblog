import axios from "axios"
import { FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Signup = () => {
  const [name, setname] = useState<string>('')
  const [username, setusername] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [loading, setloading] = useState<boolean>(false)

  const navigate = useNavigate()

  const user = {
    name, username, password
  }

  const handle_submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name || !username || !password) {
      return console.error("please fill the input forms");
    }

    setloading(true)

    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_CLOUDFLARE_BACKEND_URL}/api/v1/user/signup`, user)
      const jwt = await response.data.jwt;
      const authorid = await response.data.user.id;

      const user_name = await response.data.user_name;
      if (!jwt) {
        console.log("invalid data from frontend")
      }
      // console.log(jwt)
      localStorage.setItem('token', jwt)
      localStorage.setItem('loggedin_user', user_name)
      localStorage.setItem('local_authorid', authorid)


      navigate('/blogs')

    } catch (error) {
      //toast.error
      console.log(error)
    } finally {
      setloading(false)
    }
  }
  return (
    <div>
      <div className="h-screen py-10 md:px-20 flex justify-center items-center bg-slate-800">

        <div className="w-[50%] hidden lg:block">
          <span className="flex justify-center flex-col font-bold">
            <p className="text-blue-500 text-3xl pb-10">Register your account</p>
            <h1 className="text-white text-6xl pb-10">Start your journey <br /> by creating an <br /> account</h1>
            <h4 className="text-gray-400 text-lg">create blogs and read blogs...</h4>
          </span>
        </div>

        <div className="w-[50%] h-full flex justify-center items-center">
          <div className="md:w-full w-80 bg-slate-500 rounded-2xl h-[33rem] flex justify-center items-center flex-col">

            {
              loading ? (
                <div className='flex justify-center items-center w-[21rem] md:w-[20rem]'>

                  <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status">
                  </div>

                </div>
              ) : (

                <span className="flex justify-center items-center flex-col w-full px-5 ">
                  <h2 className="text-white text-3xl font-bold py-8">Register</h2>

                  <form action="" onSubmit={handle_submit} className="flex flex-col items-center">
                    <input type="text"
                      name=""
                      id=""
                      placeholder="name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                      className="px-7 rounded-full h-16 mb-5 w-[18rem] md:w-[20rem]" />

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="email"
                      value={username}
                      onChange={(e) => setusername(e.target.value)}
                      required
                      className="px-7 rounded-full h-16 mb-5 w-[18rem] md:w-[20rem]" />

                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      required
                      className="px-7 rounded-full h-16 mb-5 w-[18rem] md:w-[20rem]" />

                    <span className="text-gray-300">
                      <input type="checkbox" name="" id="" className="w-8 "></input>By singning up, you agree to our <br /> Terms, Data Policyand Cookies.
                    </span>
                    <button type="submit" className="bg-blue-600  w-full rounded-full text-white font-bold h-16 mt-5">Get Started</button>
                    <p className='my-3'>Already have an account..? <Link to={'/signin'} className='text-violet-300'>Signin</Link> </p>
                  </form>

                </span>
              )
            }
          </div>
        </div>

      </div>
    </div>
  )
}
