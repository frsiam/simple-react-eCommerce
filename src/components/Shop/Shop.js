import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product) =>{
        console.log(product)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product handleAddToCart={handleAddToCart} product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container" style={{backgroundColor:'cyan'}}>
                <h3>order summary</h3>
            </div>
        </div>
    );
};

export default Shop;