import React from 'react';
import '../css/footer.css'

const Footer = () => {
    return(
        <footer id="footer">
            <div id="footer-info">
                2003-2011 &copy; Copyright 10Bet.com Ltd. All rights reserved.
            </div>
            <div className="footer-links">
                <a className="footer-links-item" href="#footer">Home</a>
                <a className="footer-links-item" href="#footer">Terms of use</a>
                <a className="footer-links-item" href="#footer">Responsible gaming</a>
                <a className="footer-links-item" href="#footer">Contact us</a>
            </div>
        </footer>
    )
}

export default Footer;