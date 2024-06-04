import Head from 'next/head';
import Header from './Components/Header';
import Introduction from './Components/Introduction';
import About from './Components/About';
import Pricing from './Components/Pricing';
import DoctorsRecomendations from './Components/DoctorsRecomendations';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';

export default function Home() {
    return (
        <>
            <Head>
                <title>Clinify</title>
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
            <Pricing />
            <DoctorsRecomendations />
            <FAQ />
            <Footer />
        </>
    );
}
