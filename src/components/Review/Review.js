import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan} from '@fortawesome/free-solid-svg-icons';
import './Review.css';

const Review = ({product,hanleRemoveBtn}) => {
    const {id,img, name, price, shipping,quantity } = product;
    return (
     
          <div className='review'>
            <div className="review-left">
                <div className="review-image">
                    <img src={img} alt="" />
                </div>
                <div className="review-info">
                  <h3 className='review-heading'>{name}</h3>
                  <p className='review-details'>Price: <span className='review-color-text'>${price}</span></p>
                  <p className='review-details'>Shipping Charge: <span className='review-color-text'>${shipping}</span></p>
                  <p className='review-details'>Quantity: <span className='review-color-text'>${quantity}</span></p>
                </div>
            </div>
            <div className="review-right"></div>
            <button className='review-delete-btn' onClick={()=> hanleRemoveBtn(id)}><FontAwesomeIcon className='review-delete-icon' icon={faTrashCan}></FontAwesomeIcon></button>
      
      </div>
    );
};

export default Review;