import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Products.css'

const Products = (props) => {
   const {img, name, price, seller, ratings} = props.product
    return (
        <div className='product'>
            
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3 className='product-name'>{name}</h3>
               <p className='product-price'>Price: ${price}</p>
               <p className='product-seller'>Manufacturer:{seller}</p>
               <p className='product-ratings'>Rating:{ratings}</p>
            </div>
                <button onClick={()=>props.handler(props.product)} className='pro-btn'>Add to Cart <FontAwesomeIcon className='product-cart-icon' icon={faCartPlus}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Products;