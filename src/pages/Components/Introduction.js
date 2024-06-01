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
        </section>
    );
}

export default Introduction;
