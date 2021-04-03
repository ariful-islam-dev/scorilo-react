import React from 'react'
import ProductImg from '../assets/images/product2-2.jpg'
const ProductShow = () => {
    return (
        <div class="productbox">
            <img src={ProductImg} alt="" />
            <div class="clearfix">
            </div>
            <br />
            <div class="product-details text-left">
                <p>
                    Your description here. Serenity is a highly-professional & modern website theme crafted with you, the user, in mind. This light-weight theme is generous, built with custom types and enough shortcodes to customize each page according to your project. You will notice some examples of pages in demo, but this theme can do much more.
					</p>
            </div>
        </div>
    )
}

export default ProductShow
