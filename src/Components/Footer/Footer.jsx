import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
    return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Discover culinary delights at Instant Eats. With speedy delivery and a diverse menu, we're committed to bringing exceptional dining experiences right to your doorstep. Order now and indulge in convenience and flavor!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook} alt="" />
                    <img src={assets.twitter} alt="" />
                    <img src={assets.linkedin} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Instant Eats</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>            
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-828-88-38-680</li>
                    <li>contact@InstantEats.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>
            copyright 2024 @ InstantEats.com-All Rights Reserved
        </p>
    </div>
    )
}

export default Footer