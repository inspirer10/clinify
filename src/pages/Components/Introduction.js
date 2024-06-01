import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

function Introduction() {
    return (
        <section className='introduction__section'>
            <h1>Clinical notes made easy.</h1>

            <p className='introduction-description'>
                Save up to 3 hours daily on patient documentation. Finish your
                day as <br /> you leave the office - no more after-hours
                progress notes.
            </p>

            <button>
                Start Saving Time Now <FaArrowRight className='arrow-icon' />
            </button>

            <div className='doctors'>
                <div className='doctors-thumbnails-wrapper'>
                    <img
                        className='doctor-thumbnail'
                        src='/doctor1.png'
                        alt='Picture of the doctor'
                    />
                    <img
                        className='doctor-thumbnail'
                        src='/doctor2.png'
                        alt='Picture of the doctor'
                    />
                    <img
                        className='doctor-thumbnail'
                        src='/doctor3.png'
                        alt='Picture of the doctor'
                    />
                    <img
                        className='doctor-thumbnail'
                        src='/doctor5.png'
                        alt='Picture of the doctor'
                    />
                </div>
                <p>Join 1k+ doctors today </p>
            </div>

            <p className='trustedHeader'>
                Trusted by the world's most innovative teams
            </p>

            <div className='logos-container'>
                <img className='logo-thumbnail' src='/logo1.png' alt='logo' />
                <img className='logo-thumbnail' src='/logo2.png' alt='logo' />
                <img className='logo-thumbnail' src='/logo3.png' alt='logo' />
                <img className='logo-thumbnail' src='/logo4.png' alt='logo' />
                <img className='logo-thumbnail' src='/logo6.png' alt='logo' />
                <img className='logo-thumbnail' src='/logo5.png' alt='logo' />
            </div>
        </section>
    );
}

export default Introduction;
