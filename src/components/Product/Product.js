import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name,img,price,ratings,seller}=props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <h3>Price: {price}</h3>
        </div>
    );
};

export default Product;