import React from 'react';
import './Card.css'
const Card = ({ exercise }) => {
    const { id, name, age, img, time, description } = exercise;
    // console.log(img)
    return (
        <div className='card'>
            <img className='card-img' src={img} alt="" />
            <div className='card-info'>
                <h3>{name}</h3>
                <p className='description'>{description.slice(0, 100) + ' see more...'}</p>
                <p>For Age : <strong>{age}</strong></p>
                <p>Time Required : <strong>{time}S</strong></p>
            </div>
            <button className='btn-add'>Add To List</button>
        </div>
    );
};

export default Card;
