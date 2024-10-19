import axios from 'axios'
import { Blogdemo } from '../components/Blogdemo'
import { useEffect, useState } from 'react'

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
        const allblogs_reponse = await axios.get("http://127.0.0.1:8787/api/v1/blog/bulk", { headers })
        const blogs = allblogs_reponse.data.blogs
        console.log('all the  blogs are ', blogs)

        setallblogs(blogs)
      } catch (error) {
        console.log(error)
      }
    }
    fetch_allblogs()
  }, [])

  return (
    <div className='flex justify-evenly h-screen p-2 '>
      <div className='p-3 w-[50rem]'>
        {allblogs.length > 0 ? (
          allblogs.map((blog) => (
            <div key={blog.id}>
              <Blogdemo blog={blog}></Blogdemo>
            </div>

          ))
        ) : (
          <p>no blogs available </p>
        )}
      </div>

      <div>
        blog app description box
      </div>
    </div>
  )
}
