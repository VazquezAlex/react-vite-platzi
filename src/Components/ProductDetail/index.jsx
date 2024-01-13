
// Third-party imports.
import { XMarkIcon } from '@heroicons/react/24/solid';

// Local imports.
import './styles.css';
import { useShopiContext } from '../../Context';

const ProductDetail = () => {

    const { isProductDetailOpen, closeProductDetail } = useShopiContext();

    if (!isProductDetailOpen) return <></>;

    return (
        <aside 
            className = 'product-detail flex flex-col fixed right-1 border border-black rounded-lg bg-white'
        >
            <div className = 'flex justify-between items-center p-6'>
                <h2 className = 'font-medium text-xl'>Detail</h2>
                <div
                    className = 'hover:opacity-50 cursor-pointer'
                    onClick = { () => closeProductDetail() }
                >
                    <XMarkIcon className = 'h-6 w-6 text-black-600' />
                </div>
            </div>
        </aside>
    );
}

export default ProductDetail;
