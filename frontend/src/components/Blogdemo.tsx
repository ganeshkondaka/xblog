import {  useNavigate } from "react-router-dom";
import { Blogif } from "../pages/Blogs"

interface BlogdemoProps {
  blog: Blogif;
}
export const Blogdemo = ({ blog }: BlogdemoProps) => {
  const navigate = useNavigate()

  const handle_blogid = (blog_id: string) => {
    // Navigate to the route with the blog ID (or pass it as state)

    // navigate(`/theblog?blog_id=${blog_id}`);
    navigate('/theblog', { state: { blog_id } });
  }

  return (
    <div className="mb-5 ">

      <div  onClick={() => handle_blogid(blog.id)} className="">
        <div className="flex itmes-center pb-4">
          <div className="bg-black h-6 w-6 rounded-full text-center text-1xl text-white  font-bold flex justify-center items-center font-serif ">{(blog.author.name).slice(0, 1)} </div>
          <div className="flex items-center pl-4 text-slate-800 font-mono">{blog.author.name}</div>
        </div>
        <h1 className="text-2xl font-bold pl-1">
          {blog.title}
        </h1>
        <div className="text-gray-500 mb-4 pl-1 pt-2">
          {(blog.content).length > 100 ? ((blog.content).slice(0, 100) + '...') : blog.content}
        </div>
        <div className="text-gray-600 mb-6">
          {(blog.createdAt).slice(0, 10)}   and extras 'like button'
        </div>
        <hr className="border border-gray-200" />
      </div>
    </div>
  )
}
