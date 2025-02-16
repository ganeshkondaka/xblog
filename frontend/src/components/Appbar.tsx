import { Link, useNavigate } from "react-router-dom"

export const Appbar = () => {
    const navigate=useNavigate()

    const loggedout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('loggedin_user')
        localStorage.removeItem('local_authorid')
        console.log('user logged out')
        navigate('/')
    }
    return (
        <div className="w-screen fixed backdrop-blur-sm">
            <div className="border flex justify-between px-4 md:px-10 py-2 ">

                <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer font-bold  text-2xl font-sans hover:scale-125 transition-all duration-300">
                    XBlog
                </Link>

                <div>
                    <Link to={'/postblog'}>
                        <button type="button" className="mr-0 text-white text-xs bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full p-2 text-center me-2 mb-2">Create blog</button>
                    </Link>
                    <button onClick={loggedout} className="px-2 py-1 border mx-2 rounded-lg hover:bg-zinc-200 hover:scale-105 transition-all duration-300 border-zinc-500">Logout</button>
                </div>
            </div>
        </div>
    )
}