import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Buy Mobile " , link: "/emergency"},
        {name: "Check Mobile " , link: "/check"},
        {name: "Personal Mobile" , link: "/Personal-mobile"},
        {name: "Mobile shop" , link: "/mobile-shop"},
        {name: "View" , link: "/view"},
    ]
    const ourAddress = [
        {name: "bangladesh" , link: "//google.com/map"},
        {name: "chittagong" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Buy Mobile" , link: "/emergency"},
        {name: "Mobile shop" , link: "/shop"},
        {name: "Check Mobile" , link: "/personal-mobile"},
        {name: "Buy Mobile" , link: "/Buy-Mobile"},
        {name: "Check camera" , link: "/check"},
        {name: "Check Mobile" , link: "/check"},
        {name: "Personal Mobile" , link: "/personal-mobile"}
    ]
    const services = [
        {name: "Buy Mobile" , link: "/emergency"},
        {name: "Mobile shop" , link: "/shop"},
        {name: "Check Mobile" , link: "/personal-mobile"},
        {name: "Buy Mobile" , link: "/Buy-Mobile"},
        {name: "Check camera" , link: "/check"},
        {name: "Check Mobile" , link: "/check"},
        {name: "Personal Mobile" , link: "/personal-mobile"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-warning">Call Now</h6>
                            <button className="btn btn-warning">01881881881</button>
                        </div>
                    </FooterCol>
                    <FooterCol key={1} menuTitle={"support"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="view" menuItems={oralHealth}/>
                    
                </div>
                <div className="copyRight text-center">
                    <p className="text-white">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;