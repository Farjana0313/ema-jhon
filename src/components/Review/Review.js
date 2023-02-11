import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
    const [cart, setCart]  = useState([]);

    const removeProduct=(productKey)=>{
        const newCart = cart.filter(pd=>pd.key != productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
    
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[]);
    return (
        <div>
            <h1>Cart Items : {cart.length}</h1>
            {
                cart.map(product=><ReviewItem product={product} key={product.key} removeProduct={removeProduct} ></ReviewItem>)
            }
        </div>
    );
};

export default Review;