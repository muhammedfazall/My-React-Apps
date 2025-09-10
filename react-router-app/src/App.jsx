import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'


function App() {

  return(
    <Routes>
      <Route path="/" element={<Navigate to="/Register"/>}></Route>
      <Route path="/Register" element={<Register/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="*" element={<Navigate to="/Register"/>}></Route>
    </Routes>
  );

}

export default App
