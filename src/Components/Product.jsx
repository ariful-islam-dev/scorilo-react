import React from 'react';
import product1 from '../assets/images/product1.jpg'
import product2 from '../assets/images/product2.jpg'
import product3 from '../assets/images/product3.png'

const Product = () => {
    return (
        <div className="row">
            <div className="col-md-4">
                <div className="productbox">
                    <div className="fadeshop">
                        <div className="captionshop text-center" style={{ display: 'none' }}>
                            <h3>Item Name</h3>
                            <p>
                                This is a short excerpt to generally describe what the item is about.
						</p>
                            <p>
                                <a href="/" className="learn-more detailslearn"><i className="fa fa-shopping-cart"></i> Purchase</a>
                                <a href="/" className="learn-more detailslearn"><i className="fa fa-link"></i> Details</a>
                            </p>
                        </div>
                        <span className="maxproduct"><img src={product1} alt="" /></span>
                    </div>
                    <div className="product-details">
                        <a href="/">
                            <h1>Calypso Theme</h1>
                        </a>
                        <span className="price">
                            <span className="edd_price">$49.00</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* <!-- /.productbox --> */}
            <div className="col-md-4">
                <div className="productbox">
                    <div className="fadeshop">
                        <div className="captionshop text-center" style={{ display: 'none' }}>
                            <h3>Item Name</h3>
                            <p>
                                This is a short excerpt to generally describe what the item is about.
						</p>
                            <p>
                                <a href="/" className="learn-more detailslearn"><i className="fa fa-shopping-cart"></i> Purchase</a>
                                <a href="/" className="learn-more detailslearn"><i className="fa fa-link"></i> Details</a>
                            </p>
                        </div>
                        <span className="maxproduct"><img src={product2} alt="" /></span>
                    </div>
                    <div className="product-details">
                        <a href="/">
                            <h1>FastSell Theme</h1>
                        </a>
                        <span className="price">
                            <span className="edd_price">$49.00</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* <!-- /.productbox --> */}
            <div className="col-md-4">
                <div className="productbox">
                    <div className="fadeshop">
                        <div className="captionshop text-center" style={{ display: 'none' }}>
                            <h3>Item Name</h3>
                            <p>
                                This is a short excerpt to generally describe what the item is about.
						</p>
                            <p>
                                <a href="/" className="learn-more detailslearn"><i className="fa fa-shopping-cart"></i> Purchase</a>
                                <a href="/" className="learn-more detailslearn"><i className="fa fa-link"></i> Details</a>
                            </p>
                        </div>
                        <span className="maxproduct"><img src={product3} alt="" /></span>
                    </div>
                    <div className="product-details">
                        <a href="/">
                            <h1>Biscaya Theme</h1>
                        </a>
                        <span className="price">
                            <span className="edd_price">$49.00</span>
                        </span>
                    </div>
                </div>
            </div>
            {/* <!-- /.productbox --> */}
        </div>
    )
}

export default Product
