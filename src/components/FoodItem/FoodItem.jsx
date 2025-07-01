import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'

const FoodItem = ({ id, name, price, description, image }) => {
    
    const handleAddToCart = () => {
        // You can implement add to cart functionality here using the id
        console.log(`Adding item with id: ${id} to cart`);
    }
    
    return (
        <div className='food-item' data-id={id}>
            <div className="food-item-image-container">
                <img src={image} alt={name} className="food-item-img" />
                <div className="add-icon" onClick={handleAddToCart}>
                    <img src={assets.add_icon_white} alt="Add to cart" />
                </div>
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-description">
                    {description}
                </p>
                <p className="food-item-price">
                    ${price}
                </p>
            </div>
        </div>
    )
}

export default FoodItem