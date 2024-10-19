import { Blogif } from "../pages/Blogs"

interface BlogdemoProps {
  blog: Blogif;
}
export const Blogdemo = ({ blog }: BlogdemoProps) => {

  return (
    <div className="mb-5">

      <div className="">
        <div className="flex itmes-center pb-4">
          <div className="bg-green-700 h-6 w-6 rounded-full text-center text-1xl text-white flex justify-center  ">{(blog.author.name).slice(0,1)} </div>
          <div className="flex items-center pl-4 text-slate-800">{blog.author.name}</div>
        </div>
        <h1 className="text-2xl font-bold pl-1">
          {blog.title}
        </h1>
        <div className="text-gray-500 mb-4">
          {(blog.content).length > 100 ? ((blog.content).slice(0, 100)+'...') : blog.content}
        </div>
        <div className="text-gray-600 mb-10">
          {(blog.createdAt).slice(0, 10)}     and extras 'like button'
        </div>
        <hr className="border border-gray-100" />
      </div>
    </div>
  )
}
