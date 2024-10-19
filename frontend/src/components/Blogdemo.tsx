import { Blogif } from "../pages/Blogs"

interface BlogdemoProps {
  blog: Blogif;
}
export const Blogdemo = ({ blog }: BlogdemoProps) => {

  return (
    <div className="mb-5">

      <div className="">
        <div className="flex itmes-center">
          <div className="bg-green-700 h-10 w-10 rounded-full text-center text-2xl text-white">{(blog.author.name).slice(0,1)} </div>
          <span className="flex items-center pl-4">{blog.author.name}</span>
        </div>
        <h1>
          {blog.title}
        </h1>
        <div>
          {(blog.content).length > 100 ? ((blog.content).slice(0, 100)+'...') : blog.content}
        </div>
        <div>
          Date : {(blog.createdAt).slice(0, 10)} and extras 'like button'
        </div>
        <hr className="border border-red-600" />
      </div>
    </div>
  )
}
