
// Third-party imports.
import { XMarkIcon } from '@heroicons/react/24/solid';

// Local imports.
import { useShopiContext } from '../../Context';
import './styles.css';

const CheckoutSideMenu = () => {

    const { 
        isShoppingCartOpen,
        closeShoppingCart,
    } = useShopiContext();

    if (!isShoppingCartOpen) return <></>;

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
            
        </aside>
    );
}

export default CheckoutSideMenu;