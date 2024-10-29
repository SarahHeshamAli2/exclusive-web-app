import { createBrowserRouter, RouterProvider,  } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import SignUp from "./Components/SignUp/SignUp"
import SignIn from "./Components/SignIn/SignIn"
import NotFound from "./Components/NotFound/NotFound"
import Home from "./Components/Home/Home"
import AuthContext from "./Context/AuthContext"
import Cart from "./Components/Cart/Cart"
import Wishlist from './Components/Wishlist/Wishlist';
import Profile from "./Components/Profile/Profile"
import Protectedroute from "./Components/Protectedroute/Protectedroute"
import ProductDetails from "./Components/ProductDetails/ProductDetails"
import ContactUs from "./Components/ContactUs/ContactUs"
import OurStory from "./Components/OurStory/OurStory"
import { QueryClient, QueryClientProvider } from "react-query"
import CartContext from "./Context/CartContext"
import { Toaster } from "react-hot-toast"
import Payment from "./Components/Payment/Payment"
import SuccessOrder from "./Components/SuccessOrder/SuccessOrder"
import AllOrders from "./Components/AllOrders/AllOrders"
import Cancellation from "./Components/Cancellation/Cancellation"
import Reviews from "./Components/Reviews/Reviews"
import AllProducts from "./Components/AllProducts/AllProducts"

export default function App() {



const router = createBrowserRouter(
  [{path : '' , element : <Layout/> , children : [
    {path : "register" , element : <SignUp/>} , 
    {path : "allproducts" , element : <AllProducts/>} , 
    {path : 'login' , element : <SignIn/>} , 
    {path : '*' , element : <NotFound/>},
    { index : true , element : <Home/>},
    { path : 'home' , element : <Home/>},
    { path : 'product/:id' , element : <ProductDetails/>},
    { path : 'contact' , element : <ContactUs/>},
    { path : 'ourstory' , element : <OurStory/>},
    {path : 'cart' , element : <Protectedroute>

<Cart/>
    </Protectedroute>},
    {path : 'ordercompleted' , element : <Protectedroute>

<SuccessOrder/>
    </Protectedroute>},
    {path : 'allorders' , element : <Protectedroute>

<AllOrders/>
    </Protectedroute>},
    {path : 'cancellation' , element : <Protectedroute>

<Cancellation/>
    </Protectedroute>},
    {path : 'Reviews' , element : <Protectedroute>

<Reviews/>
    </Protectedroute>},
    {path : 'Payment' , element : <Protectedroute>

<Payment/>
    </Protectedroute>},
    {path : 'wishlist' , element : <Protectedroute>

<Wishlist/>
    </Protectedroute>},
    {path : 'profile' , element : <Protectedroute>

<Profile/>
    </Protectedroute>},

    
  ]}]
)
const reactQueryConfig = new QueryClient()

return <>



<AuthContext>
<QueryClientProvider client={reactQueryConfig}>



<CartContext>
<RouterProvider router={router} />
</CartContext>
<Toaster/>
</QueryClientProvider>
</AuthContext>


</>

}
