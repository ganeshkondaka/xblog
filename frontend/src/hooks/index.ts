// import { useEffect, useState } from "react";
// import { Blogif } from "../pages/Blogs";
// import axios from "axios";

// export const useBlogs = async ({ blog_id }: string) => {
//     const [blog, setblog] = useState<Blogif>()


//     useEffect(() => {

//         const fetch_allblogs = async () => {
//             try {

//                 const token = localStorage.getItem('token');
//                 const headers = {
//                     Authorization: token
//                 }

//                 const blog_response = await axios.get(`${import.meta.env.VITE_REACT_APP_CLOUDFLARE_BACKEND_URL}/api/v1/blog/getblog/${blog_id}`, { headers })
//                 const blog = blog_response.data.blog
//                 // console.log('the blogs is ', blog)

//                 setblog(blog)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         fetch_allblogs()
//     }, [blog_id])

//     return {
//         blog
//     }


// }