import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Blogif } from "./Blogs";
import axios from "axios";
// import { useBlogs } from "../hooks";

// interface BlogProps {
//   blog: Blogif;
// }

export const Update_blog = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { blog } = location.state as { blog: Blogif };
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  // const [blog_id, setblog_id] = useState(blog.id);

  // console.log(blog)

  const handle_updateblog = async () => {

    if (!title || !content) {
      console.log('empty input feilds..!')
      return console.error('enter the blog details');
    }
    const blogData = {
      title,
      content,
    };
    // console.log(blogData)
      try {
        const token = localStorage.getItem('token');
        const headers = {
          Authorization: token
        }

        const sent_response = await axios.put(`${import.meta.env.VITE_REACT_APP_CLOUDFLARE_BACKEND_URL}/api/v1/blog/update/${blog.id}`, blogData, { headers })
        // const sent_response = await axios.put(`http://127.0.0.1:8787/api/v1/blog/update/${blog.id}`, blogData, { headers })

        if (sent_response.status == 200) {
          console.log(sent_response)
        }
        else {
          console.log('failed to post the blog')
        }

      } catch (error) {
        console.error("Error posting the blog:", error);
        // setMessage("Error posting the blog.");
      }
      // navigate('/theblog', { state: { blog_id } });
      navigate(-1);
  };




  return (
    <div>

      <div className="flex justify-center items-center ">
        <div className="pt-16 p-3 md:w-[40rem] ">

          <div className="flex itmes-center pb-4 pt-8 pl-1 bg-slate-300">
            <div className="bg-gray-500 h-12 w-12 rounded-full text-center text-2xl text-white font-bold flex justify-center items-center font-serif  "> {blog?.author?.name.slice(0, 1)} </div>

            <div className=" flex items-start flex-col justify-end pl-4 ">
              <div className=" text-slate-500 text-1xl text-left font-bold font-mono">{blog?.author.name}</div>
              <p className="text-1xl text-gray-500">  → Published in XBlog ©</p>
            </div>

          </div>

          <div className="text-gray-600 mb-3 pl-5 bg-slate-300">
            {blog?.createdAt.slice(0, 10)}   and extras 'like button'
            <hr className="border border-gray-100 mt-2" />
          </div>

          <textarea
            // defaultValue={blog?.title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full h-full mt-5 p-2 text-4xl font-extrabold pl-2 border border-gray-500 rounded-lg">
            {/* {blog?.title} */}
          </textarea>

          <textarea
            // defaultValue={blog?.content}
            value={content}
            onChange={(e) => { setContent(e.target.value) }}
            className="w-full h-screen mt-5 p-2 text-gray-800 text-xl mb-4 pl-3 pt-2 border border-gray-500 rounded-lg">
            {/* {blog?.content} */}
          </textarea>

          <div className="fixed bottom-0 right-0 m-3 mb-10 bg-green-700 opacity-70 text-white text-1xl p-2 rounded-full">
            <button onClick={handle_updateblog}>Done</button>
          </div>

        </div>
      </div>

    </div>
  );
}
