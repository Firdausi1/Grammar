import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li><img src="../../linkedin-in-brands 2linkedin.svg" alt="LinkedIn"/></li>
                <li><img src="../../facebook 2facebook.svg" alt="Facebook"/></li>
                <li><img src="../../instagram 2insta.svg" alt="Instagram"/></li>
                <li><img src="../../youtube 2youtube.svg" alt="Youtube"/></li>
            </ul>
            <p className="footer__copy">Copyright © 2020 Grammar</p>
            <p>GADS2020</p>
        </div>
    )
}

export default Footer
