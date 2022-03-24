import React from 'react';
import './Cart.css'

const Cart = ({cart,totalPrice}) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price
        shipping = shipping + product.shipping
    }
    const tax = (total * 0.1).toFixed(2)

    const grandTotal = total + shipping + (+tax)
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Item: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;