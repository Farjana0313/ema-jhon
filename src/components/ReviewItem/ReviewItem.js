import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quantity,key} = props.product;
    const review_item_style={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    }
    return (
        <div style={review_item_style}>
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br />
            <button onClick={()=>props.removeProduct(key)} className='main-button'>Remove</button>
        </div>
    );
};

export default ReviewItem;