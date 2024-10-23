import axios from 'axios'
import { Blogdemo } from '../components/Blogdemo'
import { useEffect, useState } from 'react'
import { Appbar } from '../components/Appbar'
import { Loader } from '../components/Loader'

export interface Blogif {
  "content": string,
  "title": string,
  "id": string,
  "createdAt": string,
  "updatedAt": string,
  "author": {
    "name": string,
  },

}

export const Blogs = () => {
  const [allblogs, setallblogs] = useState<Blogif[]>([])

  useEffect(() => {

    const fetch_allblogs = async () => {
      try {

        const token = localStorage.getItem('token');
        const headers = {
          Authorization: token
        }
        const allblogs_reponse = await axios.get("https://backend.ganeshcoursera1122.workers.dev/api/v1/blog/bulk", { headers })
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
    <div className='bg-gray-100'>
      <div className="top-0 static">
        <Appbar></Appbar>
      </div>
      <div className='flex justify-evenly h-screen p-2 pt-16'>

        <div className='p-3 w-[25rem] md:w-[35rem]'>
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

        <div className='hidden lg:block'>
          blog app description box
        </div>
      </div>
    </div>
  )
}
