import React from 'react';
import './Cart.css';
const Cart = (cart) => {
    return (
        <div>
              <h2>Order Sumary</h2>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;