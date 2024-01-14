
// Local imports.
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { useShopiContext } from "../../Context";

const Home = () => {

    const { items } = useShopiContext();

    return (
        <Layout>
            <h1>Home</h1>
            <div className = 'grid grid-cols-4 gap-4'>
                {
                    items?.map(item => (
                        <Card key = { item.id } data = { item } />
                    ))
                }
                <ProductDetail />
            </div>
        </Layout>
    );
}

export default Home;
