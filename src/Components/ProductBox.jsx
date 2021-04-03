import React from 'react'
import ProductCalculation from './ProductCalculation'
import ProductShow from './ProductShow'

const ProductBox = () => {
    return (
        <div class="row">
            <div class="col-md-8">
                <ProductShow/>
            </div>
            <div class="col-md-4">
                <a href="#" class="btn btn-buynow">$49.00 - Purchase</a>
                <div class="properties-box">
                    <ProductCalculation/>
                </div>
            </div>
        </div>
    )
}

export default ProductBox
