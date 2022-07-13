
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [render,setRender]=useState(false);
  const nav=useNavigate();

  async function registerUser(e){
    e.preventDefault();

   const response= await fetch('https://jwtauth1450.herokuapp.com/api/register',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
      },
    body:JSON.stringify({name,email,password})
    });

  const data=await response.json();
  if(data.status==='ok'){
    nav.push('/login')
  }
  console.log(data);
  }


  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input value={name} onChange={(e)=>{setName(e.target.value)}}type='text' placeholder="Name"/><br/>
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}type='email' placeholder="Email"/><br/>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}type='password' placeholder="Password"/><br/>
       <input onClick={()=>{setRender(true)}} type='submit' value='Register'/>
      </form>
      {render?(<h4>Successfully Registered</h4>):(<h4>Please Register</h4>)}
    </div>
  );
}

export default App;
