import axios from 'axios'

import { Blogdemo } from '../components/Blogdemo'
import { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Loader } from '../components/Loader'
import { useNavigate } from 'react-router-dom'

export interface Blogif {
  "content": string,
  "title": string,
  "id": string,
  "createdAt": string,
  "updatedAt": string,
  "author": {
    "name": string,
    "id": string
  },

}

export const Blogs = () => {

  const navigate = useNavigate()
  const [allblogs, setallblogs] = useState<Blogif[]>([])


  useEffect(() => {

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin')
    }

    const fetch_allblogs = async () => {
      try {

        const token = localStorage.getItem('token');
        const headers = {
          Authorization: token
        }
        const allblogs_reponse = await axios.get(`${import.meta.env.VITE_REACT_APP_CLOUDFLARE_BACKEND_URL}/api/v1/blog/bulk`, { headers })
        // const allblogs_reponse = await axios.get("http://127.0.0.1:8787/api/v1/blog/bulk", { headers })
        const blogs = allblogs_reponse.data.blogs
        // console.log('all the  blogs are ', blogs)

        setallblogs(blogs)
      } catch (error) {
        console.log(error)
      }
    }
    fetch_allblogs()
  }, [])

  return (
    <div className=''>
      <div className="top-0 static">
        <Appbar></Appbar>
      </div>
      <div className='flex justify-evenly h-screen overflow-scroll p-2 pt-16'>

        <div className='p-3 w-[25rem] md:w-[35rem] '>
          {allblogs.length > 0 ? (
            allblogs.map((blog) => (

              <div key={blog.id}>
                <Blogdemo blog={blog}></Blogdemo>
              </div>

            ))
          ) : (
            <div className=''>
              <Loader></Loader>
              <Loader></Loader>
              <Loader></Loader>
              <Loader></Loader>
              <Loader></Loader>

            </div>
          )}
        </div>

        <div className='hidden lg:block  h-full'>
          <div className='fixed top-[20%] right-[10%] flex flex-col items-center'>
            <img src="../xblog2.jpg" alt="xblog logo" className='w-52 h-52 rounded-2xl' />
            <div className='mt-5 text-center'>
              <p className='text-xl font-bold text-zinc-700'>-/ publish you blogs in XBlog ◩◪</p>
              <p className='text-xl pt-4 text-zinc-600'>© 2024 Ganesh. All rights reserved.</p>
              <p className='text-lg font-bold pt-4 text-zinc-400'> Made with ❤️ by <a href="https://github.com/ganeshkondaka" className='text-purple-400 underline'>Ganesh</a>  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
