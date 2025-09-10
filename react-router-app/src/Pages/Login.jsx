import {useNavigate} from 'react-router-dom'

export default function Login(){
    const navigate=useNavigate();

    function HandleLogin(){
        navigate("/Home")
    }

    return (
    <div>
        <h1>Login Page</h1>
        <button onClick={HandleLogin}>Login</button>
    </div>
    );
}