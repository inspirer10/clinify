import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Footer() {
    return (
        <footer>
            <h2 className='footer-heading'>
                Simplify clinical notes and start saving time.
            </h2>

            <button>
                Schedule a Demo Today <FaArrowRight className='arrow-icon' />
            </button>

            <div className='doctors'>
                <div className='doctors-thumbnails-wrapper'>
                    <img
                        className='doctor-thumbnail'
                        src='/doctor3.png'
                        alt='Picture of the doctor'
                    />
                    <img
                        className='doctor-thumbnail'
                        src='/doctor2.png'
                        alt='Picture of the doctor'
                    />
                    <img
                        className='doctor-thumbnail'
                        src='/doctor1.png'
                        alt='Picture of the doctor'
                    />
                    <img
                        className='doctor-thumbnail'
                        src='/doctor6.png'
                        alt='Picture of the doctor'
                    />
                </div>
                <p>Join 1k+ doctors today </p>
            </div>

            <div className='footer-main'>
                <div className='footer-inner-container'>
                    <div>
                        <p className='footer-logo'>clinify</p>
                        <p className='footer-copyright'>
                            Clinify. All rights reserved © 2024
                        </p>
                    </div>

                    <div className='footer-references-container'>
                        <div className='references-wrapper'>
                            <span>About</span>
                            <ul>
                                <li>Home</li>
                                <li>How it Works</li>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Customers</li>
                                <li>FAQ</li>
                            </ul>
                        </div>

                        <div className='references-wrapper'>
                            <span>Company</span>
                            <ul>
                                <li>Terms of Service</li>
                                <li>License</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        <div className='icons'>
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <FaXTwitter className='icon' />
                            <FaYoutube className='icon' />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
