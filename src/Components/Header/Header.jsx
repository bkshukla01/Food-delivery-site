import React from 'react'
import './Header.css'

function Header() {
    return (
    <div className='header' >
        <div className="header-contents">
            <h1>Order your Favourite Food Here!</h1>
            <p>Delicious Food Delivered to Your Doorstep! Order now for quick and tasty meals. Explore our menu and enjoy convenient delivery options. Satisfaction guaranteed </p>
        <a href="#explore-menu"> <button>View menu</button></a>
        </div>
    </div>
    )
}

export default Header