import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Signup} from './pages/Signup'
import {Signin} from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { PostBlog } from './pages/PostBlog'
import { Original_blog } from './pages/Original_blog'
import { Update_blog } from './pages/Update_blog'
import { Landingpage } from './pages/Landingpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/blog/:id" element={<Blog />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/postblog" element={<PostBlog />} />
          <Route path="/theblog" element={<Original_blog />} />
          <Route path="/updateblog" element={<Update_blog/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App