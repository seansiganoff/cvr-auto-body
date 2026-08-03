import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer-overlay" id="contact-us">
                <div className="contact-us">
                   <h3 className='theme-color'>PHONE</h3>
                     <h5>Call</h5>
                     <a href="tel:214-297-9179">214-297-9179</a>
                     <br /><br />
                     <h5>Text</h5>
                     <a href="sms:214-297-9179">214-297-9179</a>
                   </div>
                <div className="contact-us">
                    <h3 className='theme-color'>HOURS</h3>
                    <p>Monday - Friday: 9AM - 9PM.<br />Saturday: 10AM - 4PM.<br />Sunday: Closed.</p>
                </div>
            </div>
        </div>
        
        
    </footer>
  )
}

export default Footer