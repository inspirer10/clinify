import React from 'react';
import { GiPadlock } from 'react-icons/gi';
import { CiLock } from 'react-icons/ci';

function Tiles() {
    return (
        <section className='tiles__section'>
            <h2 className='tiles_heading'>Save Time, Enhance Care</h2>
            <p className='tiles_heading-description'>
                With Clinify, spend more time with patients and less on
                paperwork.
            </p>

            <article className='tiles__container'>
                <aside>
                    <div className='tile coloured'>
                        <h5>
                            PMS <br /> Integration
                        </h5>
                        <p>
                            Saves time by directly saving notes to patient
                            records.
                        </p>
                    </div>
                    <div className='tile'>
                        <img
                            src='placeholder4.png'
                            alt='placeholder'
                            className='tile-image'
                        />
                        <h5>Intuitive Notes Editor</h5>
                        <p>A web-based editor requiring no installation.</p>
                    </div>
                </aside>

                <div className='tile center-tile'>
                    <img src='placeholder2.png' alt='placeholder dashboard' />
                    <h5>AI Scribe for Telehealth and In-person</h5>
                    <p>
                        Works on speakerphone or via voice memo, with real-time
                        transcription that understands accents and multiple
                        languages.
                    </p>
                </div>

                <aside>
                    <div className='tile'>
                        <img
                            src='placeholder6.png'
                            alt='placeholder'
                            className='tile-image invert'
                        />
                        <h5>Medical letter generation</h5>
                        <p>
                            This is part of the documentation workflow as well.
                        </p>
                    </div>
                    <div className='tile'>
                        <GiPadlock className='padlock-icon' />

                        <h5 style={{ textAlign: 'center' }}>
                            State-of-the-Art Privacy
                        </h5>
                        <p style={{ textAlign: 'center' }}>
                            Stateless processing with encrypted note storage.
                        </p>
                    </div>
                </aside>
            </article>
        </section>
    );
}

export default Tiles;
