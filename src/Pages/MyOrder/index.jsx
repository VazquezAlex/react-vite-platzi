// Local imports.
import { useShopiContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {

    const {
        orders,
    } = useShopiContext();

    return (
        <Layout>
            <h1>My Order</h1>
            <div className = 'flex flex-col w-80'>
                {
                    orders.length > 0 && orders.slice(-1)[0].products.map(product => (
                        <OrderCard
                            key = { product.id }
                            title = { product.title }
                            imageUrl = { product.image }
                            price  = { product.price }
                        />
                    ))
                }
            </div>
        </Layout>
    );
}

export default MyOrder;
