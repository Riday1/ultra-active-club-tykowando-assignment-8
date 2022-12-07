import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {


    const [exercises, setExercises] = useState([]);//fetch json data 
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    return (
        <div className='main-container'>
            <div className='left-part'>
                <div className="left-container">
                    <Navbar></Navbar>
                    <Cards exercises={exercises}></Cards>
                </div>
            </div>
            <div className="right-container">
                <h1>hello</h1>
            </div>
        </div>
    );
};

export default Home;