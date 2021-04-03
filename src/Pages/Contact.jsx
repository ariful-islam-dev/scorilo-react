import React from 'react'
import Banner from '../Components/Banner'
import CallAction from '../Components/CallAction'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import SectionTitle from '../Components/SectionTitle'

const Contact = () => {
    return (
        <div>
            {/* Header Area */}
            <header className="item header margin-top-0">
                <div className="wrapper">
                    <Navigation />
                    <Banner  subTitle="Contact Page" />
                </div>
            </header>
            {/* Header End */}
            {/* Content Items  */}
            <section className="item content">
                <div className="container toparea">
                    <SectionTitle title="GET IN TOUCH"/>
                    <ContactForm/>
                    </div>
            </section>
            
            {/* Call to Action  */}
            <CallAction/>
            {/* Footer Area  */}
            <Footer/>
        </div>
    )
}

export default Contact
