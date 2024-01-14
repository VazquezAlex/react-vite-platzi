// Third-party imports.
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

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
            <div className = "flex items-center justify-center w-80 relative mb-6">
                <Link to = '/my-orders' className = 'absolute left-0'>
                    <ChevronLeftIcon className = "h-6 w-6" />
                </Link>
                <h1>My Order</h1>
            </div>
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
