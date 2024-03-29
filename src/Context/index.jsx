// Core imports.
import { createContext, useContext, useEffect, useState } from 'react';

// Third-party imports.
import PropTypes from 'prop-types';

// Local imports.
import { apiUrl } from '../api';

// Create the context.
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    // Shopping Cart - Increment quantity.
    const [count, setCount] = useState(0);

    // Product Detail - Open / Close.
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);    
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Product Detail - Show Product.
    const [productToShow, setProductToShow] = useState({});
    
    // Shopping Cart - Add Products to cart.
    const [cartProducts, setCartProducts] = useState([]);
    const [cartTotal, setCartTotal] = useState([]);

    // Shopping Cart - Calculate Total.
    useEffect(() => {
        const total = cartProducts.reduce((sum, product) => sum + product.price, 0);
        setCartTotal(total);
    }, [cartProducts]);

    // Shopping Cart - Order
    const [orders, setOrders] = useState([]);

    // Checkout Side Menu - Open / Close.
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
    const openShoppingCart = () => setIsShoppingCartOpen(true);    
    const closeShoppingCart = () => setIsShoppingCartOpen(false);

    // Get Products
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
                setItems(data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    const values = {
        cartProducts,
        cartTotal,
        count,
        isProductDetailOpen,
        isShoppingCartOpen,
        items,
        orders,
        productToShow,
        closeProductDetail,
        closeShoppingCart,
        openProductDetail,
        openShoppingCart,
        setCartProducts,
        setCount,
        setItems,
        setOrders,
        setProductToShow,
    }

    return (
        <ShoppingCartContext.Provider value = { values }>
            { children }
        </ShoppingCartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useShopiContext = () => useContext(ShoppingCartContext);

ShoppingCartProvider.propTypes = {
    children: PropTypes.node,
}