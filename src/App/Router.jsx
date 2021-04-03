import { Router } from "@reach/router"
import NotFound from "../Pages/404"
import Home from "../Pages/Home"
import Shop from "../Pages/Shop"
const AppRouter = () => {
    return (
       <Router>
           <Home path="/" />
           <Shop path="/shop" />
           <NotFound default />
       </Router> 
    )
}

export default AppRouter
