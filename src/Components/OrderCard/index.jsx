/* eslint-disable react/prop-types */

// Third-party imports.
import { XMarkIcon } from '@heroicons/react/24/solid';

const OrderCard = (props) => {

    const { title, imageUrl, price, handleDelete } = props;

    const renderDeleteButton = () => {
        if (!handleDelete) return <></>;

        return (
            <div className = 'flex items-center gap-2'>
                <p className = 'text-lg font-medium'>${ price }</p>
                <XMarkIcon 
                    className = 'h-6 w-6 text-black cursor-pointer hover:opacity-55'
                    onClick = { handleDelete }
                />
            </div>
        )
    }

    return (
        <div className = 'flex justify-between items-center'>
            <div className = 'flex items-center gap-2'>
                <figure className = 'w-20 h-20 min-w-20 min-h-20'>
                    <img
                        alt = { title }
                        className = 'w-full h-full rounded-lg object-cover'
                        src = { imageUrl }
                    /> 
                </figure>
                <p className = 'text-sm font-light'>{ title }</p>
            </div>
            { renderDeleteButton() }
        </div>
    );
}

export default OrderCard;
