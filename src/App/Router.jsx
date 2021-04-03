import { Router } from "@reach/router"
import NotFound from "../Pages/404"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
const AppRouter = () => {
    return (
       <Router>
           <Home path="/" />
           <Shop path="/shop" />
           <Contact path="/contact" />
           <NotFound default />
       </Router> 
    )
}

export default AppRouter
