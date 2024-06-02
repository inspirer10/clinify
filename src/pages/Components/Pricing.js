import React from 'react';
import { PiPulseLight } from 'react-icons/pi';

function Pricing() {
    const list = (
        <ul className='list'>
            <li>
                <PiPulseLight className='icon' /> AI Scribe
            </li>
            <li>
                <PiPulseLight className='icon' />
                Telehealth
            </li>
            <li>
                <PiPulseLight className='icon' />
                In-Person Support
            </li>
            <li>
                <PiPulseLight className='icon' />
                Effortless Patient Consent
            </li>
            <li>
                <PiPulseLight className='icon' />
                State-of-the-Art Privacy
            </li>
        </ul>
    );

    const extendedList = (
        <ul className='list'>
            <li>
                <PiPulseLight className='icon' />
                AI Scribe
            </li>
            <li>
                <PiPulseLight className='icon' />
                Telehealth
            </li>
            <li>
                <PiPulseLight className='icon' />
                In-Person Support
            </li>
            <li>
                <PiPulseLight className='icon' />
                Effortless Patient Consent
            </li>
            <li>
                <PiPulseLight className='icon' />
                State-of-the-Art Privacy
            </li>
            <li>
                <PiPulseLight className='icon' />
                Priority support
            </li>
            <li>
                <PiPulseLight className='icon' />
                Advanced PMS integration
            </li>
        </ul>
    );

    return (
        <section className='pricing__section'>
            <h2 className='pricing-heading'>
                Flexible pricing for every clinic
            </h2>

            <p className='pricing_heading-description'>
                Choose the Perfect Plan to fit your needs - from Individual
                Clinicians to Large Healthcare Organizations.
            </p>

            <article className='subscriptions__container'>
                <div className='subscription-box'>
                    <p className='subsc-type'>Free</p>
                    <p className='subsc-price'>
                        $0<span> / month</span>
                    </p>
                    <p className='subsc-description'>Try Clinify for Free.</p>
                    <button>Get Started for Free</button>
                    {list}
                </div>
                <div className='subscription-box'>
                    <p className='subsc-type'>Standard</p>
                    <p className='subsc-price'>
                        $150<span> / month</span>
                    </p>
                    <p className='subsc-description'>
                        Ideal for small to medium clinics.
                    </p>
                    <button className='highlighted-button'>Get Started</button>
                    {list}
                </div>
                <div className='subscription-box'>
                    <p className='subsc-type'>Advanced</p>
                    <p className='subsc-price'>
                        $500<span> / month</span>
                    </p>
                    <p className='subsc-description'>
                        Ideal for busier clinics.
                    </p>
                    <button>Get Started</button>
                    {extendedList}
                </div>
                <div className='subscription-box'>
                    <p className='subsc-type'>Enterprise</p>
                    <p className='subsc-price'>Let's Talk!</p>
                    <p className='subsc-description'>
                        Ideal for busier clinics.
                    </p>
                    <button>Contact Sales</button>
                    {extendedList}
                </div>
            </article>
        </section>
    );
}

export default Pricing;
