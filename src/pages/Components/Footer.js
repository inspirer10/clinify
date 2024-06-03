import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

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
        </footer>
    );
}

export default Footer;
