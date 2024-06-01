import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <p className='header__logo'>clinify</p>

                <ul>
                    <li>Features</li>
                    <li>How it works</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul>

                <div className='header__buttons-wrapper'>
                    <button className='button-login'>Log in</button>
                    <button className='button-join'>Join for free</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
