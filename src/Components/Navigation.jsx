import React from 'react'

function Navigation() {
    return (
        <nav role="navigation" className="navbar navbar-white navbar-embossed navbar-lg navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button data-target="#navbar-collapse-02" data-toggle="collapse" className="navbar-toggle" type="button">
                                <i className="fa fa-bars"></i>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                            <a href="index.html" className="navbar-brand brand"> SCORILO </a>
                        </div>
                        <div id="navbar-collapse-02" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">
                                <li className="propClone"><a href="/">Home</a></li>
                                <li className="propClone"><a href="/shop">Shop</a></li>
                                <li className="propClone"><a href="/product">Product</a></li>
                                <li className="propClone"><a href="/checkout">Checkout</a></li>
                                <li className="propClone"><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
    )
}

export default Navigation
