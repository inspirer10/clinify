import React from 'react';

import { FaSheetPlastic } from 'react-icons/fa6';
import { MdScreenSearchDesktop, MdPersonOff } from 'react-icons/md';

function About() {
    return (
        <section className='about'>
            <h2 className='about_heading'>
                Physicians dedicate 50% of their time to screens, not patients
            </h2>

            <p className='about_heading-description'>
                Spending nearly half the day on EHR, less than a third with
                patients.
            </p>

            <article className='abt-wrapper'>
                <div className='abt-item'>
                    <div className='icon-wrapper'>
                        <svg width='0' height='0'>
                            <defs>
                                <linearGradient
                                    id='gradient'
                                    x1='0%'
                                    y1='0%'
                                    x2='0%'
                                    y2='100%'
                                >
                                    <stop
                                        offset='0%'
                                        style={{
                                            stopColor: '#3dffa4',
                                            stopOpacity: 1,
                                        }}
                                    />
                                    <stop
                                        offset='100%'
                                        style={{
                                            stopColor: '#FFFFFF',
                                            stopOpacity: 1,
                                        }}
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                        <FaSheetPlastic className='icon' />
                    </div>
                    <h5>Lots of Paperwork</h5>
                    <p>
                        Spending nearly half the day on EHR, less than a third
                        with patients.
                    </p>
                </div>
                <div className='abt-item'>
                    <div className='icon-wrapper'>
                        <MdScreenSearchDesktop className='icon' />
                    </div>
                    <h5>Hidden Cost of Healthcare</h5>
                    <p>
                        Heavy paperwork detracts from clinical duties and
                        patient relationships.
                    </p>
                </div>
                <div className='abt-item'>
                    <div className='icon-wrapper'>
                        <MdPersonOff className='icon' />
                    </div>
                    <h5>Compromised Patient Engagement</h5>
                    <p>
                        Valuable face-to-face patient time is lost to
                        administrative tasks.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default About;
