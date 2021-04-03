import React from 'react'
import Banner from '../Components/Banner'
import Navigation from '../Components/Navigation'

import Footer from '../Components/Footer';
import CallAction from '../Components/CallAction';
import Product from '../Components/Product';
import SectionTitle from '../Components/SectionTitle';
import Step from '../Components/Step';
import SnipButton from '../Components/SnipButton';
import SupportArea from '../Components/SupportArea';
import Testimonial from '../Components/Testimonial';

function Home() {
    return (
        <div>
            {/* Header Area */}
            <header className="item header margin-top-0">
                <div className="wrapper">
                    <Navigation />
                    <Banner title="Increase Digital Sales" subTitle="Boost revenue with Scorilo" />
                </div>
            </header>
            {/* Header End */}
            {/* Step Start */}
            <Step/>
            {/* Step End */}
            {/* Leatest Item */}
            <section className="item content">
                <div className="container">
                    <SectionTitle title="LATEST ITEMS"/>
                    <Product/>
                 </div>
            </section>
            {/* Button */}
            <SnipButton/>
            <br />
            {/* Area */}
            <SupportArea/>
            {/* Testimonial  */}
            <Testimonial/>
            {/* Call to Button  */}
            <CallAction/>
            {/* Footer  */}
            <Footer/>

        </div>
    )
}

export default Home
