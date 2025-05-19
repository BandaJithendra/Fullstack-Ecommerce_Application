import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
// import Header from '../header';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [res, setResponse] = useState("")
    const [err, setError] = useState("")
    const navigate = useNavigate()

    const handleClick = async()=>{
        setResponse("")
        setError("")
        // console.log(email,password)
        // if(!email || !password)
        //     return
        // try{
        const payload = {
            email: email,
            password: password
        }
        try{
            const res = await axios.post("http://localhost:4000/login",payload)
            // console.log(res?.data.token)
            setResponse(res?.data.message)
            // console.log(object)
            localStorage.setItem("token",res?.data.token)
            navigate('/')
            // console.log(localStorage.getItem("token")) 
            // console.log(localStorage.getItem("email"))
        } catch(err){
            console.log(err.response.data.message)
            setError(err.response.data.message)
            return
        }
        // }   
        // catch(err){
        //     console.log("Error")
        // }
        setEmail("")
        setPassword("")
    }
    return ( 
        <>
        {/* <Header /> */}
        <div className="Login-bg">
        <div className='bg-white mx-120 mt-20 rounded-lg text-center p-3'>
            <div>
                <h1 className='text-5xl my-10' >Login</h1>
                <div className='my-10'><TextField className='w-80 text-white bg-white' onChange={(event)=>setEmail(event.target.value)} id="outlined-multiline-flexible" label="Email" type='email' value={email}/></div>
                <div className='mb-10'><TextField className='w-80 text-white' onChange={(event)=>setPassword(event.target.value)} id="outlined-multiline-flexible" label="Password" type='password' value={password}/></div>
                <p className='mb-5'>Don't Have account? <a href="/signup" className='text-blue-700 underline'>SignUp</a></p>
                <div><span className='text-green-600'>{res}</span></div>
                <div><span className='text-red-700'>{err}</span></div>
                
                <button className='mb-10 w-80 h-10 bg-orange-600' onClick={handleClick}>Submit</button>
            </div>
        </div>
        </div>
        </>
     );
}

export default Login;