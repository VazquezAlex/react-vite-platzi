// Third-party imports.
import { Link } from "react-router-dom";

// Local imports.
import { useShopiContext } from "../../Context";
import Layout from "../../Components/Layout";
import OrdersCard from "../../Components/OrdersCard";

const MyOrders = () => {

    const { 
        orders,
    } = useShopiContext();

    return (
        <Layout>
            <div className = "flex items-center justify-center w-80 mb-3">
                <h1>My Orders</h1>
            </div>
            <div>
                {
                    orders.map((order, idx) => (
                        <Link to = { `/my-orders/${ idx }` } key = { idx }>
                            <OrdersCard 
                                totalPrice = { order.totalPrice }
                                totalProducts = { order.totalProducts }
                            />
                        </Link>
                    ))
                }
            </div>

        </Layout>
    );
}

export default MyOrders;
