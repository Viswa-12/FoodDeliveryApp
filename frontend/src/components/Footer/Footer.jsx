import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} className='companyLogo' alt="" />
        <p>VFoods app connects users to local restaurants, offering a convenient platform to browse menus, place orders, and track deliveries in real-time.</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-000-111-99</li>
                <li>contact@vfoods.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026  @VFoods.com - All Rights Reseved.</p>
    </div>
  )
}

export default Footer
