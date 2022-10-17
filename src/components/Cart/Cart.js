import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'


const Cart = ({ cart,clearCart,children }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * .10).toFixed(2));

    const grandTotal = total + shipping + tax;
    return (
        <div className="cart cart-review">
            <h3 >Order Summary</h3>
            <ul className='order-summer-calculation'>
                <li>Selected Items:{quantity} </li>
                <li>Total Price: ${total}</li>
                <li>Total Shipping Charge: ${shipping} </li>
                <li>Tax: ${tax} </li>

            </ul>
            <p className='order-summery-total'>Grand Total: ${grandTotal}</p>

            <button className='order-summery-btn cart-clear-btn' onClick={clearCart}>Clear Cart <FontAwesomeIcon className='order-summer-icon' icon={faTrashCan}></FontAwesomeIcon></button>
            {
                children
            }
        
         

        </div>
    );
};

export default Cart;