import React from 'react'
import './index.scss'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer__left">
    
            <div className="footer__left__title"><h4>+Digital</h4></div>
            <div className="footer__left__description">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</div>
            <div className="footer__left__icons"><img src={require('../../assets/photos/facebook.png')} /><img src={require('../../assets/photos/twitter.png')} /><img src={require('../../assets/photos/linkedin.png')} /></div>
        </div>
        <div className="footer__right">
            <div className="footer__right__items">
                <div className="footer__right__items__item">
                <h4>Services</h4>
                <ul>
                    <li>Web Design</li>
                    <li>App Design</li>
                    <li>Digital Marketing</li>
                    <li>Prodcut Analyst</li>

                </ul>
                </div>
                <div className="footer__right__items__item">
                <h4>About</h4>
                <ul>
                    <li>About Us</li>
                    <li>Career</li>
                   

                </ul>
                </div>
               
                <div className="footer__right__items__item">
                <h4>Contact</h4>
                <ul>
                    <li>Whatsapp</li>
                    <li>Support 24</li>
                  

                </ul>
                </div>
                <div className="footer__right__items__item">
                <h4>Blog</h4>
                <ul>
                    <li>Contents</li>
                    <li>Authors</li>
                    <li>SEO</li>

                  

                </ul>
                </div>
          
            </div>
            
        </div>
        
    </div>
  )
}
