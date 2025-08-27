import { useState } from 'react'

function Form() {

    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [Password,setPassword] =useState("");
    const [errors,setErrors] =useState({})
function handleSubmit(e){
    e.preventDefault();

    if(!email){
        alert("Email is required")
    }
}


    return (
        <form className='form-container' onSubmit={handleSubmit}>
            <label >Name:</label><br/>
            <input type='text'placeholder='Enter your Name' onChange={(e) => setName(e.target.value)}></input><br/>
            <label >Email:</label>
            <input type='text'placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)}></input><br />
            <label >Password:</label>
            <input type='text'placeholder='Enter your Password' onChange={(e) => setPassword(e.target.value)}></input><br />
            <button className='submit'>SUBMIT</button>
        </form>
    );
    
}

export default Form