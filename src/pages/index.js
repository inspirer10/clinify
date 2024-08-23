import Head from 'next/head';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Pricing from './Components/Pricing';
import DoctorsRecomendations from './Components/DoctorsRecomendations';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Tiles from './Components/Tiles';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Head>
                <title>CLINIFY - Clinical Notes</title>
                <meta
                    name='description'
                    content='Clinify - Clinical notes made easy'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/icon.png' />
            </Head>
            <Header />
            <Introduction />
            <About />
            <Tiles />
            <Pricing />
            <DoctorsRecomendations />
            <FAQ />
            <Footer />
        </>
    );
}
