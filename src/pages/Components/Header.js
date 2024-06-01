import React from 'react';

function Header() {
    return (
        <header>
            <nav>
                <p>clinify</p>

                <ul>
                    <li>Features</li>
                    <li>How it works</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul>

                <div>
                    <button>Log in</button>
                    <button>Join for free</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
