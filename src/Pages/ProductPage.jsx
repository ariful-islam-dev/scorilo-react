
import Banner from '../Components/Banner'
import CallAction from '../Components/CallAction'
import Footer from '../Components/Footer'
import Navigation from '../Components/Navigation'
import ProductBox from '../Components/ProductBox'
import SectionTitle from '../Components/SectionTitle'

const ProductPage = () => {
    return (
        <div>
            {/* Header Area */}
            <header className="item header margin-top-0">
                <div className="wrapper">
                    <Navigation />
                    <Banner  subTitle="Product Page" />
                </div>
            </header>
            {/* Header End */} 
             {/* Content Items  */}
             <section className="item content">
                <div className="container toparea">
                    <SectionTitle title="AWESOME PRODUCTS"/> 
                    <ProductBox/>
                    </div>
            </section>
            {/* Call to Action  */}
            <CallAction/>
            {/* Footer Area  */}
            <Footer/>
        </div>
    )
}

export default ProductPage
