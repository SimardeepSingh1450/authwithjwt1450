
import {useState} from 'react';
function App() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  async function loginUser(e){
    e.preventDefault();

   const response= await fetch('https://jwtauth1450.herokuapp.com/api/login',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
      },
    body:JSON.stringify({email,password})
    });

  const data=await response.json();
  if(data.user){
    localStorage.setItem('token',data.user);
    console.log(data.user);
    alert('Login Succesfull');
    window.location.href='/dashboard'
  }else{
    alert('Please Check your Username and Password')
  }
  console.log(data);
  }


  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginUser}>

        <input value={email} onChange={(e)=>{setEmail(e.target.value)}}type='email' placeholder="Email"/><br/>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}type='password' placeholder="Password"/><br/>
        <input type='submit' value='Login'/>
      </form>
    </div>
  );
}

export default App;
