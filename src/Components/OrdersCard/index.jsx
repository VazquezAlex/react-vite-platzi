/* eslint-disable react/prop-types */

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props;

    return (
        <div className = 'flex justify-between items-center border border-black'>
            <p>
                <span>01.02.2024</span>
                <span>{ totalProducts }</span>
                <span>{ totalPrice }</span>
            </p>
        </div>
    );
}

export default OrdersCard;
