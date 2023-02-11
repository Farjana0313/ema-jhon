import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetail.css'

const ProductDetail = () => {
    const { productKey } = useParams()
    const product = fakeData.find(product => product.key === productKey);
    console.log('product' + product);
    return (
        <div>
            <h1>{productKey} This is product details</h1>
            <Product product={product} showAddToCart={false}></Product>
        </div>
    );
};

export default ProductDetail;