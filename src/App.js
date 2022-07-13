
import React from 'react'
import Dashboard from './pages/Dashboard';
import './App.css';
import {Route,Routes,Link} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div>
        
        <Routes>
            <Route path='/login' exact element={<Login/>}/>
            <Route path='/register' exact element={<Register/>}/>
            <Route path='/dashboard' exact element={<Dashboard/>}/>
        </Routes>
        <h1>Basic JWT Auth</h1>
      <Link to="/login">Login</Link><br/>
      <Link to="/register">Register</Link>
        
    </div>
  )
}

export default App
