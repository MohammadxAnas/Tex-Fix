import React from 'react';
import { NavLink } from 'react-router-dom';
import './hq.css';
function Navbar(props){
    return(
   <>
   <div className='navbar'>
    <div className='logo'>
        <img src='favicon-32x32.png' alt='favicon-16x16.png'/>
        <h2>Tex-Fix</h2>
    </div>
     <nav className='about'>
           <NavLink className={(e)=>{return e.isActive?"red":"blue"}} to="/"><li>Home</li></NavLink> 
            <NavLink className={(e)=>{return e.isActive?"red":"blue"}} to="/About"><li>About</li></NavLink>
     </nav>
     <button className='modebtn' onClick={props.bgcolor}>{props.mode}</button>
   </div> 
   </>
    ) 
}
export default Navbar