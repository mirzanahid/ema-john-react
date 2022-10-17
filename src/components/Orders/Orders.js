import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCreditCard } from '@fortawesome/free-solid-svg-icons';

import './Orders.css'

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const hanleRemoveBtn = (id) => {
        const remaining = cart.filter(product => product.id != id)
        setCart(remaining)
        removeFromDb(id)
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop order-review'>
            <div className="review-container">
                {
                    cart.map(product => <Review key={product.id} product={product} hanleRemoveBtn={hanleRemoveBtn}></Review>)
                }
                {
                    cart.length === 0 && <h2>Cart is empty please <Link to={'/'}>shop</Link> to review cart</h2>
                }
            </div>
            <div className="cart-container">

                <Cart cart={cart} clearCart={clearCart}>
                    <Link className='linkOfBtn'> <button className='order-summery-btn '>Proceed Checkout<FontAwesomeIcon className='order-summer-icon' icon={faCreditCard}></FontAwesomeIcon></button></Link>
                </Cart>

            </div>

        </div>
    );
};

export default Orders;