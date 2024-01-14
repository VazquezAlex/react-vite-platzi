// Third-party imports.
import { BrowserRouter, useRoutes } from 'react-router-dom';

// Local imports.
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import Navbar from '../../Components/Navbar';
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/my-account', element: <MyAccount /> },
        { path: '/my-order', element: <MyOrder /> },
        { path: '/my-orders', element: <MyOrders /> },
        { path: '/my-orders/last', element: <MyOrder /> },
        { path: '/sign-in', element: <SignIn /> },
        { path: '/*', element: <NotFound /> },
    ]);

    return routes;
}

const App = () => {

    return (
        <ShoppingCartProvider>
            <BrowserRouter>
                <Navbar />
                <AppRoutes />
            </BrowserRouter>
        </ShoppingCartProvider>
    );
}

export default App
