import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios";
import { Appbar } from "../components/Appbar";
import { Blog_loader } from "../components/Blog_loader";
import { Blogif } from "./Blogs";

export const Original_blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const loacalauthor_id= localStorage.getItem('local_authorid')


  const { blog_id } = location.state as { blog_id: string }; // Type assertion for state
  // Parse the query parameters
  // const searchParams = new URLSearchParams(location.search);
  // const blog_id = searchParams.get('blog_id');

  const [blog, setblog] = useState<Blogif>()


  useEffect(() => {

    const fetch_allblogs = async () => {
      try {

        const token = localStorage.getItem('token');
        const headers = {
          Authorization: token
        }

        const blog_response = await axios.get(`${import.meta.env.VITE_REACT_APP_CLOUDFLARE_BACKEND_URL}/api/v1/blog/getblog/${blog_id}`, { headers })
        const blog = blog_response.data.blog
        // console.log('the blogs is ', blog)

        setblog(blog)
      } catch (error) {
        console.log(error)
      }
    }
    fetch_allblogs()
  }, [blog_id])

  if (!blog) {
    return (
      <div className="mt-28 flex justify-center ">
        <Blog_loader></Blog_loader>
      </div>
    )
  }
  // const blog_is = blog
  // console.log('blog is :',blog_is) 
  // module.exports = { blog_is }

  const handle_sentblog = (blog: Blogif) => {
    navigate('/updateblog', { state: { blog } })
  }

  return (
    <div>
      <div>
        <Appbar></Appbar>
      </div>
      <div className="flex justify-center items-center ">
        <div className="pt-20 p-3 md:w-[40rem] ">
          <h1 className="text-4xl font-extrabold pl-1 ">
            {blog?.title}
          </h1>

          <div className="flex itmes-center pb-4 pt-8 pl-1">
            <div className="bg-black h-12 w-12 rounded-full text-center text-2xl text-white font-bold flex justify-center items-center font-serif  "> {blog?.author?.name.slice(0, 1)} </div>

            <div className=" flex items-start flex-col justify-end pl-4 ">
              <div className=" text-slate-700 text-1xl text-left font-bold font-mono">{blog?.author.name}</div>
              <p className="text-1xl text-gray-500">  → Published in XBlog ©</p>
            </div>

          </div>

          <div className="text-gray-600 mb-3 pl-5">
            {blog?.createdAt.slice(0, 10)}   and extras 'like button'
            <hr className="border border-gray-100 mt-2" />
          </div>
          <div className="text-gray-800 text-xl mb-4 pl-1 pt-2">
            {blog?.content}
          </div>
        </div>
      </div>

      {loacalauthor_id === blog.author.id ?  (

        <div className="fixed bottom-0 right-0 m-3 mb-10 bg-green-700 opacity-70 text-white text-1xl p-2 rounded-full">
          <button className="p-1" onClick={() => { handle_sentblog(blog) }}>Edit blog</button>
        </div>):(
          <></>
        )
      }

    </div>
  )
}
