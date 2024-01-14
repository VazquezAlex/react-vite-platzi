/* eslint-disable react/prop-types */

const OrdersCard = (props) => {

    const { totalPrice, totalProducts } = props;

    return (
        <div className = 'grid grid-cols-3 border border-black w-96 px-6 py-2 rounded-lg mb-3'>
            <span className = ''>01.02.2024</span>
            <span className = ''>Productos { totalProducts }</span>
            <span className = ''>${ totalPrice }</span>
        </div>
    );
}

export default OrdersCard;
