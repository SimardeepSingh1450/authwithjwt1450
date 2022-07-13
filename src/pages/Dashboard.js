
import React, { useEffect, useState } from 'react'
import jwt from 'jwt-decode';
import {useNavigate} from 'react-router-dom'
function Dashboard() {
const nav=useNavigate();

async function populateQuote(){
  const req=await fetch('https://jwtauth1450.herokuapp.com/api/login',{
    headers:{
      'x-access-token':localStorage.getItem('token')
    }
  })
  const data=await req.json();
  console.log('After decoding and verifying the jwt:',data)
  
}

useEffect(()=>{
  const token=localStorage.getItem('token');
  if(token){
    const user=jwt(token);
    console.log(user);
    if(!user){
      localStorage.removeItem('token')
      nav.replace('/login')
    }else{
      populateQuote();
    }
  }
},[])

  return (
    <div><h1>Login Successful</h1></div>
  )
}

export default Dashboard