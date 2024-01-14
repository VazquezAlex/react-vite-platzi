
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
        setOrders,
    } = useShopiContext();

    if (!isShoppingCartOpen) return <></>;

    const handleDelete = (id) => {
        const filteredProducts = cartProducts.filter(product => product.id !== id);
        // Update state without deleted products.
        setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: new Date().toISOString(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: cartTotal,
        }
        setOrders(prev => [...prev, orderToAdd]);
        setCartProducts([]);
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
            <div className = 'px-6 flex flex-col gap-y-2 overflow-y-scroll flex-1'>
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
            <div className = 'px-6 mt-2 mb-6'>
                <p className = 'flex justify-between items-center mb-2'>
                    <span className = 'font-light'>Total: </span>
                    <span className = 'font-medium text-xl'>${ cartTotal }</span>
                </p>
                <button
                    className = 'bg-black text-white w-full py-3 rounded-lg'
                    onClick = { () => handleCheckout() }
                >
                    Checkout
                </button>
            </div>
        </aside>
    );
}

export default CheckoutSideMenu;
