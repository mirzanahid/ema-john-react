import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
  

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products])


    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
             newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product=> product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart=[...rest, exists];
        }
       
        setCart(newCart);
        addToDb(selectedProduct.id)
    }

    const clearCart= ()=>{
          setCart([]);
          deleteShoppingCart();
    }
    return (
        <div className='shop'>
            <div className="products-container">

                {
                    products.map(product => <Products key={product.id} product={product} handler={handleAddToCart}></Products>)
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart} clearCart={clearCart}>
             
                    <Link className='linkOfBtn' to={'/orders'}>
                    <button className='order-summery-btn '>Review Order<FontAwesomeIcon className='order-summer-icon' icon={faArrowRight}></FontAwesomeIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;