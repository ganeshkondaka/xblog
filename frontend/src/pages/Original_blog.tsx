import { useLocation } from "react-router-dom"

export const Original_blog = () => {
    const location = useLocation();

    const { blog_id } = location.state as { blog_id: string }; // Type assertion for state
    // Parse the query parameters
    // const searchParams = new URLSearchParams(location.search);
    // const blog_id = searchParams.get('blog_id');
  
  return (
    <div>
        the blog is {blog_id}
    </div>
  )
}
