import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    let total = 0;
    let shiping =0;
     for(const product of cart){
          total=total+product.price;
          shiping=shiping+product.shipping;
     }
  const tax = (total *0.1).toFixed(2)  ;
    return (
        <div className='cart'>
              <h2>Order Sumary</h2>
             <p>Selected Item: {cart.length}</p>
             <p>Total price:${total} </p>
             <p>Total shopping:{shiping}</p>
             <p>Tax:{tax}</p>
             <p className='bold'> Grand Total: </p>
        </div>
    );
};

export default Cart;