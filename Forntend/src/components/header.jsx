import React, {useEffect, useState} from 'react';
import Buttons from './button';
import SearchBar from './searchBar';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from 'axios';



function Header() {
    const [user, setUser] = useState("")
    useEffect(() => {
        const TokenVerfied = async () => {
            // const email = localStorage.getItem("email");
            console.log("FFEND Token...",localStorage.getItem("token"))
            const payload = {
                token: localStorage.getItem("token")
            };
            try {
                const res = await axios.post("http://localhost:4000/tokenverified", payload);
                console.log("Token Verified Iendhi...");
                localStorage.setItem("email",res.data.user.email)
                console.log("user Email..",res?.data.user);
                setUser(res?.data.user.user)
            } catch (err) {
                console.log("Token Verified Kaaledhu...", err);
            }
        };
    
        TokenVerfied();
    }, []);
    return ( 
        <div className='flex  items-center py-3 bg-white mb-3'>
            <div className='w-59'><img src="Images\TitleBanner.svg" alt="Banner" /></div>
            <SearchBar/>
            <Buttons user={user}/>
            
        </div>
     );
}

export default Header;