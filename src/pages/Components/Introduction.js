import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

function Introduction() {
    return (
        <section className='introduction__section'>
            <h1>Clinical notes made easy.</h1>

            <p className='introduction-description'>
                Save up to 3 hours daily on patient documentation. Finish your
                day as you leave the office - no more after-hours progress
                notes.
            </p>

            <button>
                Start Saving Time Now <FaArrowRight className='arrow-icon' />
            </button>

            <div className='doctors'>
                <div className='doctors-thumbnails-wrapper'>
                    <Image
                        className='doctor-thumbnail'
                        src='/doctor1.png'
                        alt='Picture of the doctor'
                        height={300}
                        width={300}
                    />
                    <Image
                        className='doctor-thumbnail'
                        src='/doctor2.png'
                        alt='Picture of the doctor'
                        height={300}
                        width={300}
                    />
                    <Image
                        className='doctor-thumbnail'
                        src='/doctor3.png'
                        alt='Picture of the doctor'
                        height={300}
                        width={300}
                    />
                    <Image
                        className='doctor-thumbnail'
                        src='/doctor5.png'
                        alt='Picture of the doctor'
                        height={300}
                        width={300}
                    />
                </div>
                <p>Join 1k+ doctors today </p>
            </div>

            <img
                className='introduction-placeholder'
                src='placeholder1.png'
                alt='dashboard placeholder'
            />

            <p className='trustedHeader'>
                Trusted by the world's most innovative teams
            </p>

            <div className='logos-container'>
                <Image
                    className='logo-thumbnail'
                    src='/logo1.png'
                    alt='logo'
                    height={250}
                    width={250}
                />
                <Image
                    className='logo-thumbnail'
                    src='/logo2.png'
                    alt='logo'
                    height={250}
                    width={250}
                />
                <Image
                    className='logo-thumbnail'
                    src='/logo3.png'
                    alt='logo'
                    height={250}
                    width={250}
                />
                <Image
                    className='logo-thumbnail'
                    src='/logo4.png'
                    alt='logo'
                    height={250}
                    width={250}
                />
                <Image
                    className='logo-thumbnail'
                    src='/logo6.png'
                    alt='logo'
                    height={250}
                    width={250}
                />
                <Image
                    className='logo-thumbnail'
                    src='/logo5.png'
                    alt='logo'
                    height={250}
                    width={250}
                />
            </div>
        </section>
    );
}

export default Introduction;
