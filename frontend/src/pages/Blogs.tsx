import { BlogCard } from "../components/BlogCard";

import { Appbar } from "../components/Appbar";
// import { BlogSkeleton } from "../components/BlogSkeleton";
// import { useBlogs } from "../hooks";

export const Blogs = () => {
    // const { loading, blogs, error } = useBlogs();

    // if (loading) {
    //     return <div>
    //         <Appbar />
    //         <div className="flex justify-center">
    //             <div>
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //                 <BlogSkeleton />
    //             </div>
    //         </div>
    //     </div>
    // }

    // if (error) {
    //     return <div>
    //         Error: {error}
    //     </div>;
    // }

    return (
        <div>
             <Appbar />
           {/* <div className="flex justify-center">
                <div>
                    {blogs.map(blog => (
                        <BlogCard
                            id={blog.id}
                            authorName={blog.author.name || "John Doe"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2nd Fab 2024"}
                        />
                    ))}
                </div>
            </div> */}
            <div>
                   
                        <BlogCard
                            id={1}
                            authorName={ "John Doe"}
                            title={"title"}
                            content={"lorem ipsum 1001010101010"}
                            publishedDate={"2nd Fab 2024"}
                        />
                    
                </div>
        </div>
    );
};