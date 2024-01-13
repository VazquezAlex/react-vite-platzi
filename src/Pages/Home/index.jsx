// Core imports.
import { useEffect, useState } from "react";

// Local imports.
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import { apiUrl } from "../../api";

const Home = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(apiUrl);
                const data = await res.json();
    
                setItems(data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    return (
        <Layout>
            <h1>Home</h1>
            <div className = 'grid grid-cols-4 gap-4'>
                {
                    items?.map(item => (
                        <Card key = { item.id } data = { item } />
                    ))
                }
            </div>
        </Layout>
    );
}

export default Home;
