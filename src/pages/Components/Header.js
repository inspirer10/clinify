import { useRouter } from 'next/router';
import React from 'react';

function Header() {
    const router = useRouter();

    const handleSectionRouting = (e, section) => {
        e.preventDefault();

        //? Jeśli jesteśmy już na stronie głównej, przewiń do sekcji
        if (router.pathname === '/') {
            document
                .getElementById(`${section}`)
                ?.scrollIntoView({ behavior: 'smooth' });
        } else {
            //? W przeciwnym razie, przekieruj na stronę główną
            router.push(`/#${section}`);
        }
    };

    return (
        <header>
            <nav>
                <div className='header__logo'>
                    <p>clinify</p>
                </div>

                <ul>
                    <a
                        href='#how'
                        onClick={(e) => handleSectionRouting(e, 'how')}
                    >
                        How it works
                    </a>
                    <a
                        href='#features'
                        onClick={(e) => handleSectionRouting(e, 'features')}
                    >
                        Features
                    </a>
                    <a
                        href='#pricing'
                        onClick={(e) => handleSectionRouting(e, 'pricing')}
                    >
                        Pricing
                    </a>
                    <a
                        href='#faq'
                        onClick={(e) => handleSectionRouting(e, 'faq')}
                    >
                        FAQ
                    </a>
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
