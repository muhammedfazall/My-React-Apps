import { useNavigate } from 'react-router-dom';

export default function Register(){

    const navigate = useNavigate();

    function handleSubmit(){
        navigate('/Login');
    }

    return (
    <div>
        <h1>Register Page</h1>
        <button onClick={handleSubmit}>Register</button>
    </div>
    );
}