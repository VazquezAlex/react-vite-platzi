
// Third-party imports.
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

// Local imports.
import { useShopiContext } from '../../Context';

const Card = ({ data }) => {

    const { category, id, image, title, price } = data;

    const { 
        cartProducts,
        closeProductDetail,
        openProductDetail, 
        openShoppingCart, 
        setCartProducts, 
        setProductToShow 
    } = useShopiContext();

    const showProduct = () => {
        openProductDetail();
        setProductToShow(data);
    }
    
    const addProductsToCart = (event) => {
        event.stopPropagation();

        setCartProducts(prev => [...prev, data]);
        closeProductDetail();
        openShoppingCart();
    }

    const renderIcon = () => {

        const isInCart = cartProducts.filter(product => product.id === id);

        if (isInCart.length) return (
            <div className = "absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
                <CheckIcon className = 'h-6 w-6 text-white' />
            </div>
        )

        return (
            <div
                className = "absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                onClick = { addProductsToCart }
            >
                <PlusIcon className = 'h-6 w-6 text-black' />
            </div>
        );
    }

    return (
        <div 
            className = "bg-white hover:cursor-pointer w-56 h-60"
            onClick =  { showProduct }
        >
            <figure className = 'relative mb-2 w-full h-4/5'>
                <span className = "absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5 capitalize">
                    { category }
                </span>
                <img 
                    alt = { title }
                    className = "w-full h-full object-cover rounded-lg"
                    src = { image }
                />
                { renderIcon() }
            </figure>
            <p className = 'flex justify-between items-center'>
                <span className = "text-sm font-light truncate">{ title }</span>
                <span className = "text-lg font-medium">${ price }</span>
            </p>
        </div>
    );
}


Card.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        category: PropTypes.string,
        image: PropTypes.string,
        rating: PropTypes.shape({
            rate: PropTypes.number,
            count: PropTypes.number,
        })
    }),
}

export default Card;
