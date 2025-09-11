import {createContext, useState} from 'react'

const BlogContext = createContext();

export function BlogProvider({children}){

    const [blogs,setBlogs]= useState([]);

    function addBlog(newBlog){
        setBlogs((prevBlog)=>[...prevBlog,newBlog]);
    }
    return(
        <BlogContext.Provider value={{blogs, addBlog}}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext