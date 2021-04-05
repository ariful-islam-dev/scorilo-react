import { Router } from "@reach/router"
import NotFound from "../Pages/404"
import CheckoutPage from "../Pages/CheckoutPage"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import ProductPage from "../Pages/ProductPage"
import Shop from "../Pages/Shop"
const AppRouter = () => {
    return (
       <Router>
           <Home path="/" />
           <Shop path="/shop" />
           <Contact path="/contact" />
           <ProductPage path="/product" />
           <CheckoutPage path="/checkout" />
           <NotFound default />
       </Router> 
    )
}

export default AppRouter
