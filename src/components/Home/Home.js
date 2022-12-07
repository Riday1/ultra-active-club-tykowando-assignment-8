import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import userImage from '../../user-image/user-1.png'
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
                <div className='user-info'>
                    <div className="userProfile">
                        <img className='user-image' src={userImage} alt="" />
                        <div className='user-details'>
                            <h2 className='user-name'>Arnob Kormokar Shishir </h2>
                            <p className='user-address'><svg className='icon' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                                Dhaka , Bangladesh</p>
                        </div>
                    </div>
                    <div className="healthDetails">
                        <div className="block">
                            <p><strong className='font-size'>75</strong>Kg</p>
                            <p>Weight</p>
                        </div>
                        <div className="block">
                            <p><strong className='font-size'>6.5</strong></p>
                            <p>Height</p>
                        </div>
                        <div className="block">
                            <p><strong className='font-size'>27</strong>yrs</p>
                            <p>Weight</p>
                        </div>
                    </div>
                    <div className="breakTime"></div>
                    <div className="userExerciseDetials"></div>

                </div>
            </div>
        </div>
    );
};

export default Home;