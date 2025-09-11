import {Routes,Route,Navigate} from 'react-router-dom'
import CreateBlog from './pages/CreateBlog'
import Blogs from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'

function App() {
  
  return (
   <Routes>
    <Route path='/' element={<Navigate to='/CreateBlog'/>}></Route>
    <Route path='/createblog' element={<CreateBlog/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/blogs/:id' element={<BlogDetails/>}></Route>
   </Routes>
  )
}

export default App
