import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h1>This is orders section</h1>
            <h2>Toatal Products: {products.length}</h2>
        </div>
    );
};

export default Orders;