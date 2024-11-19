import { useEffect, useState } from "react";
import { Image_input } from "../components/Image_input";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

export const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [message, setMessage] = useState("");

  const navigate=useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token');
      if(!token){
            navigate('/signin')
          }
  },[])
  

  const handlePostBlog = async () => {

    if (!title || !content) {
      console.log('empty input feilds..!')
      return console.error('enter the blog details');
    }
    const blogData = {
      title,
      content,
    };

    try {
      const token = localStorage.getItem('token');
      if(!token){
        navigate('/signin')
      }

      const headers = {
        Authorization: token
      }
      

      const sent_response = await axios.post(`${import.meta.env.VITE_REACT_APP_CLOUDFLARE_BACKEND_URL}/api/v1/blog/newblog`, blogData, { headers })
      
      if (sent_response.status == 200) {
        console.log( sent_response)
      }
      else {
        console.log('failed to post the blog')
      }

    } catch (error) {
      console.error("Error posting the blog:", error);
      // setMessage("Error posting the blog.");
    }
    navigate('/blogs')
  };

  return (
    <div className="mb-5">
      <button onClick={()=>{navigate('/blogs')}} className="relative w-16 h-auto moving-div text-gray-400 text-2xl pl-10 pt-1">
        ←-
      </button>
      <div className="flex flex-col items-center h-[40rem] mt-2">
        <span className="text-[20px] font-bold pb-2 text-left">Create your blog  here...</span>
        <div className="w-44 md:w-[40rem]">
          <Image_input />
        </div>
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black md:w-[70%] w-[90%] my-3 rounded-lg border border-gray-400 px-4 p-4 hover:bg-slate-200"
        />
        
        <textarea
          placeholder="Your content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="text-black h-full md:w-[70%] w-[90%] my-3 rounded-lg border border-gray-400 px-4 p-4  hover:bg-slate-200"
        />
        
        <button
          onClick={handlePostBlog}
          className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4  hover:bg-blue-600">
          Post Blog
        </button>

      </div>
    </div>
  );
};
