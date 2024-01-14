
// Third-party imports.
import { XMarkIcon } from '@heroicons/react/24/solid';

// Local imports.
import { useShopiContext } from '../../Context';
import './styles.css';

const ProductDetail = () => {

    const { 
        productToShow, 
        isProductDetailOpen, 
        closeProductDetail 
    } = useShopiContext();

    if (!isProductDetailOpen || !productToShow) return <></>;

    const { description, image, title, price } = productToShow;

    return (
        <aside 
            className = 'product-detail flex flex-col fixed right-1 border border-black rounded-lg bg-white'
        >
            <div className = 'flex justify-between items-start p-6'>
                <h2 className = 'font-medium text-xl'>Detail { productToShow.title }</h2>
                <div
                    className = 'hover:opacity-50 cursor-pointer'
                    onClick = { () => closeProductDetail() }
                >
                    <XMarkIcon className = 'h-6 w-6 text-black-600' />
                </div>
            </div>
            <figure className = 'px-6'>
                <img 
                    alt = { title } 
                    className = 'w-full h-full object-cover rounded-lg'
                    src = { image } 
                />
            </figure>
            <p className = 'flex flex-col p-6'>
                <span className = 'font-medium text-2xl mb-2'>${ price }</span>
                <span className = 'font-medium text-xl'>{ title }</span>
                <span className = 'font-light text-sm'>{ description }</span>
            </p>
        </aside>
    );
}

export default ProductDetail;
