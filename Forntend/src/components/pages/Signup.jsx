import React, { use, useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Header from '../header';


function Signup () {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [mobilenumber, setMobilenumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [res, setResponse] = useState("")
    const [err, setError] = useState("")


    const handleClick= async()=>{
        setResponse("")
        setError("")
        console.log(email, username, mobilenumber, password, confirmpassword)
        const payload = {
            email:email,
            username:username,
            mobilenumber:mobilenumber,
            password:password,
            confirmpassword:confirmpassword 
        }
        try{
            const res = await axios.post("http://localhost:4000/signup",payload)
            console.log(res?.data)
            setResponse(res?.data.message)
        } catch(err){
            console.log(err.response.data)
            setError(err.response.data.message)
            return
        }
        
        setEmail("")
        setUsername("")
        setMobilenumber("")
        setPassword("")
        setConfirmpassword("")
    }
    return ( 
        <>
        <Header />
        <div className='bg-white mx-120 mt-20 rounded-lg text-center p-3'>
            <div>
                <h1 className='text-5xl my-10' >SignUp</h1>
                <div className='my-10'><TextField className='w-80 text-white bg-white' onChange={(event)=>setEmail(event.target.value)} id="outlined-multiline-flexible" label="Email" type='email' value={email}/></div>
                <div className='my-10'><TextField className='w-80 text-white bg-white' onChange={(event)=>setUsername(event.target.value)} id="outlined-multiline-flexible" label="Username" type='text' value={username}/></div>
                <div className='my-10'><TextField className='w-80 text-white bg-white ' onChange={(event)=>setMobilenumber(event.target.value)} id="outlined-multiline-flexible" label="Mobile Number" type='number' value={mobilenumber}/></div>
                <div className='mb-10'><TextField className='w-80 text-white' onChange={(event)=>setPassword(event.target.value)} id="outlined-multiline-flexible" label="Password" type='password' value={password}/></div>
                <div className='my-2'><TextField className='w-80 text-white bg-white' onChange={(event)=>setConfirmpassword(event.target.value)} id="outlined-multiline-flexible" label="Confirm Password" type='password' value={confirmpassword}/></div>
                <div className='mb-3 h-3'><span>{res}</span></div>
                <div className='mb-3 h-3'><span>{err}</span></div>

                <p className='mb-5'>You Have account already? <a href="/login" className='text-blue-700 underline'>Login</a></p>
                <button className='mb-10 w-80 h-10 bg-orange-600' onClick={handleClick}>Submit</button>
            </div>
        </div>
        </>
     );
}

export default Signup;