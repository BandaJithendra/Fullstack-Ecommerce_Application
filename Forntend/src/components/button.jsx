import * as React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginIcon from '@mui/icons-material/Login';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

export default function Buttons(props) {
  return (
    <div>
      <button className='mx-7 border-solid  rounded-sm  px-2 w-25 h-10 text-lg hover:cursor-pointer hover:bg-blue-600 hover:text-white'> <a href="/login"><LoginIcon />Login</a></button>
      <button className='mx-7 border-solid  rounded-sm  px-2 w-25 h-10 text-lg hover:cursor-pointer'> <a href="/cart"><ShoppingCartOutlinedIcon />Cart</a></button>
      <button className='mx-5 border-solid  rounded-sm  px-2 w-45 h-10 text-lg hover:cursor-pointer'> < AccountCircleIcon/> {props.user}</button>
      {/* <select name="user"> */}
        {/* <option value="User" defaultValue={true}>{props.user}</option> */}
        {/* <option value="user">{props.user}</option> */}
      {/* </select> */}
      {/* <button className='mx-3'><MoreVertOutlinedIcon/></button> */}

    </div>


  );
}
