import { useContext } from "react";
import BlogContext from "../BlogContext";
import { Link } from "react-router-dom";

export default function Blogs(){

    const {blogs} = useContext(BlogContext);


    return(
        <div className="Blogs"><p>Blogs:</p>
        {blogs.map((blog) => (
        <div key={blog.id}>
          <Link style={{color:"black"}} to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
        </div>
        
    );
}