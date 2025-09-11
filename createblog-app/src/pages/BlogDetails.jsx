import {useParams} from 'react-router-dom'
import { useContext } from 'react';
import BlogContext from '../BlogContext';

export default function BlogDetails(){
const {id} = useParams();
const {blogs} = useContext(BlogContext);
const blog= blogs.find(b=>b.id === Number(id));

    return(
        <div>
            {blog? (<><h1>{blog.title}</h1><p>{blog.body}</p></>):(<><p>Not Found!</p></>)} 
        </div>
    );
}