import React from 'react'
import Banner from '../Components/Banner'
import CallAction from '../Components/CallAction'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import Product from '../Components/Product'
import SectionTitle from '../Components/SectionTitle'

const Shop = () => {
    return (
        <div>
            {/* Header Area */}
            <header className="item header margin-top-0">
                <div className="wrapper">
                    <Navigation />
                    <Banner subTitle="Shop Page" />
                </div>
            </header>
            {/* Header Area */}
            <section className="item content">
                <div className="container toparea">
                    <SectionTitle title="OUR PRODUCTS"/>
                    <Product/>
                    <Product/>
                </div>
            </section>
            {/* Call to Action */}
            <CallAction/>

            {/* Call to Action */}
            {/* Footer Area  */}
            <Footer/>
            {/* Footer Area  */}
        </div>
    )
}

export default Shop
