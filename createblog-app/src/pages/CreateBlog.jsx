import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import { useContext } from 'react';
import BlogContext from '../BlogContext';
 
export default function CreateBlog(){
    const navigate = useNavigate();
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("")
    const {addBlog} = useContext(BlogContext);

    function handleSubmit(e){
        e.preventDefault();
        addBlog({id:Date.now(),title,body})
        navigate('/blogs')
    }

    return(
        <div><p>Write Your Blog Here:</p>
        <form onSubmit={handleSubmit}>
             <input type="text" 
                    placeholder='Title' 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}></input><br/><br/>
             <textarea style={{height:"400px",width:"320px"}} 
                       placeholder='Write your blog here..'
                       onChange={(e)=> setBody(e.target.value)} 
                       value={body}></textarea><br/>
             <button type='submit'>Submit</button>
        </form>
        </div>
    );
}