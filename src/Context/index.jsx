// Core imports.
import { createContext, useContext, useState } from 'react';

// Third-party imports.
import PropTypes from 'prop-types';

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

    // Checkout Side Menu - Open / Close.
    const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);
    const openShoppingCart = () => setIsShoppingCartOpen(true);    
    const closeShoppingCart = () => setIsShoppingCartOpen(false);

    const values = {
        cartProducts,
        count,
        isProductDetailOpen,
        isShoppingCartOpen,
        productToShow,
        closeProductDetail,
        closeShoppingCart,
        openProductDetail,
        openShoppingCart,
        setCartProducts,
        setCount,
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