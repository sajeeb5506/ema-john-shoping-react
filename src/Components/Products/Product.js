import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
   const{name,seller,price,ratings,img}=props.product;
 
    return (
        <div className='product'>
            <img src={img} alt="" />
         <div className="product-diteal">
         <p className='product-name'>{name}</p>
           <p>Sealler:{seller}</p>
           <p>Price: ${price}</p>
           <p> Reating: {ratings}</p>
         </div>

         <button onClick={()=>props.handelAddToCart(props.product)} className='btn-card'>
             <p className='btn-text'>Add to card</p>
             <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
        </div>
    );
};

export default Product;