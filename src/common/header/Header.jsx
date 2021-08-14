import './Header.css';
import React, { useState } from 'react';
import logo from './../logo.svg';
import Button from '@material-ui/core/Button';



export default  function Header() {
  
  const [login, setLogin] = useState(false);

     function changeState(){
        setLogin(!login)
      };
        
        return (
            <div className="header">
               <img src={logo} className="svg" alt="logo" />
               <Button variant="contained" style={{color:"black"}} onClick={changeState}>
               {login ? "Log Out" : " Login "}</Button>
            </div>
        );
}
