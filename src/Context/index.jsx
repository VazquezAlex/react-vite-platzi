// Core imports.
import { createContext, useContext, useState } from 'react';

// Third-party imports.
import PropTypes from 'prop-types';

// Create the context.
export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    const [count, setCount] = useState(0);

    const values = {
        count,
        setCount,
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