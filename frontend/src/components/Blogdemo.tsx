import { Blogif } from "../pages/Blogs"

interface BlogdemoProps {
    blog: Blogif;
  }
export const Blogdemo =({ blog }: BlogdemoProps) => {

  return (
    
    <div>
        <div>
            <span>{blog.content}</span>
            <span>{blog.title}</span>
        </div>
        <h1>
            blog title
        </h1>
        <div>
            blog content demo
        </div>
        <div>
            time and extras
        </div>
        <hr />
    </div>
  )
}
