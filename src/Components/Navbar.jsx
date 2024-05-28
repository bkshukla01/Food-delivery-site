import React, { useState } from 'react'
import "./Navbar.css"
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom';

function Navbar({setShowLogin}) {
    const [menu,setMenu] = useState("Home");
    return (
    <div className='navbar'>
    <Link to='/'><img src={assets.logo} alt="" className='logo' /> </Link>
    {/* <button className='icon-set' ><img src={assets.Toggle_icon} alt="" /> </button> */}
        <ul className= 'navbar-menu'>
            <Link to='/' className={menu==="Home"?"active":" "} onClick={()=>setMenu("Home")} >Home</Link>
            <a href='#explore-menu' className={menu==="Menu"?"active":" "} onClick={()=>setMenu("Menu")}>Menu</a>
            <a href='#app-download' className={menu==="Mobile-app"?"active":" "} onClick={()=>setMenu("Mobile-app")}>Mobile-app</a>
            <a href='#footer' className={menu==="Contact"?"active":" "} onClick={()=>setMenu("Contact")}>Contact</a>
        </ul>

        <div className="navbar-right">
            <div className="navbar-basket-icon">
            <Link to='/cart'><img src={assets.basket} className='basket' alt="..." /></Link>
                <div className="dot"></div>
            </div>
            </div>
            <button onClick={()=>setShowLogin(true)} >Sign in</button>
            
        
    </div>
    )
}

export default Navbar