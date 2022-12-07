import React from 'react';
import './Cards.css'
import Card from '../Card/Card'
const Carts = ({ exercises }) => {
    return (
        <div>
            <h3 className='select-title'>Select today's exercise</h3>
            <div className='cards-container'>
                {
                    exercises.map(exercise => <Card key={exercise.id} exercise={exercise}></Card>)
                }
            </div>
        </div>
    );
};

export default Carts;
