import { Link } from "react-router-dom"

export const Appbar = () => {
    return (
        <div className="w-screen fixed backdrop-blur-sm">
            <div className="border flex justify-between px-10 py-2 ">

                <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-bold text-2xl font-sans">
                    XBlog
                </Link>

                <div>
                    <Link to={'/postblog'}>
                        <button type="button" className="mr-4 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Create blog</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}