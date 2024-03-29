// Third-party imports.
import { NavLink } from "react-router-dom";
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

// Local imports.
import { useShopiContext } from "../../Context";
import CheckoutSideMenu from "../CheckoutSideMenu";

const Navbar = () => {

    const { cartProducts, openShoppingCart } = useShopiContext();

    const activeStyle = 'underline underline-offset-4';

    return (
        <nav className = 'flex justify-between items-center top-0 fixed z-10 w-full py-5 px-8 text-sm font-light'>
            <ul className = 'flex items-center gap-x-3'>
                <li className = 'font-semibold text-lg'>
                    <NavLink 
                        to = '/'
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/clothes'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/electronics'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/furnitures'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/toys'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/others'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className = "flex items-center gap-x-3">
                <li className = "text-black/60">
                    alejandro@avluet.com
                </li>
                <li>
                    <NavLink 
                        to = '/my-orders'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/my-account'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to = '/sign-in'
                        className = { ({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Sign In
                    </NavLink>
                </li>
                <li 
                    className = "flex items-center gap-x-1 cursor-pointer hover:opacity-50"
                    onClick = { openShoppingCart }
                >
                    <ShoppingBagIcon className = "h-6 w-6 text-black" /> { cartProducts.length }
                </li>
            </ul>
            <CheckoutSideMenu />
        </nav>
    );
}

export default Navbar;
