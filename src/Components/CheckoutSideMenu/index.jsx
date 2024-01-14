
// Third-party imports.
import { XMarkIcon } from '@heroicons/react/24/solid';

// Local imports.
import { useShopiContext } from '../../Context';
import './styles.css';
import OrderCard from '../OrderCard';

const CheckoutSideMenu = () => {

    const { 
        cartProducts,
        cartTotal,
        isShoppingCartOpen,
        closeShoppingCart,
        setCartProducts,
    } = useShopiContext();

    if (!isShoppingCartOpen) return <></>;

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id !== id);

        // Update state without deleted products.
        setCartProducts(filteredProducts);
    }

    return (
        <aside 
            className = 'checkout-side-menu flex flex-col fixed right-1 border border-black rounded-lg bg-white'
        >
            <div className = 'flex justify-between items-center p-6'>
                <h2 className = 'font-medium text-xl'>My Order</h2>
                <div
                    className = 'hover:opacity-50 cursor-pointer'
                    onClick = { () => closeShoppingCart() }
                >
                    <XMarkIcon className = 'h-6 w-6 text-black-600' />
                </div>
            </div>
            <div className = 'px-6 flex flex-col gap-y-2 overflow-y-scroll'>
                {
                    cartProducts?.map(product => (
                        <OrderCard 
                            key = { product.id }
                            title = { product.title }
                            imageUrl = { product.image }
                            price  = { product.price }
                            handleDelete = { () => handleDelete(product.id) }
                        />
                    ))
                }
            </div>
            <div className = 'px-6 mt-2'>
                <p className = 'flex justify-between items-center'>
                    <span className = 'font-light'>Total: </span>
                    <span className = 'font-medium text-xl'>${ cartTotal }</span>
                </p>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;
