import React, { useEffect, useState } from 'react';

import Product from '../Products/Product';
import "./Shop.css"

const Shop = () => {
    const [products , setproducts]=useState([]);
    const [cart , setCart] = useState([]);

    useEffect( () =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data=>setproducts(data));
    },[]);
    const handelAddToCart = (product) =>{
    const newCart = [...cart , product];
    setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
             {
                products.map(product => <Product
                    key={product.id}
                    product={product}
                    handelAddToCart={handelAddToCart}
                ></Product>)
             }
            </div>
            <div className="card-container">
            <h2>Order Sumary</h2>
            <p>Selected Item: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;