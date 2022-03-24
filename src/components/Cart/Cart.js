import React from 'react';

const Cart = ({cart,totalPrice}) => {
    return (
        <div>
            <h3>Order summary</h3>
            <p>Selected Item: {cart.length}</p>
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
};

export default Cart;