import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import userImage from '../../user-image/user-1.png'
const Home = () => {




    // set exercise time 
    const [exerciseTime, setExerciseTime] = useState(0);
    const handleAddToList = () => {
        const newTime = exerciseTime + 40;
        setExerciseTime(newTime);
        localStorage.setItem('exercise-time', newTime);
    }
    useEffect(() => {
        const storedExerciseTime = localStorage.getItem('exercise-time');
        if (!storedExerciseTime) {
            setExerciseTime(0);
        }
        else {
            setExerciseTime(storedExerciseTime);
        }
    }, [])







    //set Break Time through  useState
    const [breakTime, setBreakTime] = useState(0)
    const handleBreakTime = (param) => {

        setBreakTime(param);
        localStorage.setItem('break-time', param);
    }
    // loaded previous break time from localStorage  using useEffect hook 
    useEffect(() => {
        const storedBreakTime = localStorage.getItem('break-time');
        console.log(storedBreakTime);
        if (!storedBreakTime) {
            setBreakTime(0);
        }
        else {
            setBreakTime(storedBreakTime);
        }
    }, [])

    // load fetch data into exercises state
    const [exercises, setExercises] = useState([]);
    //fetch json data using useEffect
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
                    <Cards exercises={exercises} handleAddToList={handleAddToList}></Cards>
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
                    <h2 className='break-title'>Add A Break</h2>
                    <div className="breakTime">
                        <button onClick={() => handleBreakTime(10)}>10s</button>
                        <button onClick={() => handleBreakTime(20)}>20s</button>
                        <button onClick={() => handleBreakTime(30)}>30s</button>
                        <button onClick={() => handleBreakTime(40)}>40s</button>
                    </div>
                    <h2>Exercise Details</h2>
                    <div className="userExerciseDetials">
                        <div className="block-2">
                            <p><strong>Exercise time </strong></p>
                            <p>{exerciseTime} seconds</p>
                        </div>
                        <div className='block-2'>
                            <p><strong>Break time </strong></p>
                            <p>{breakTime} seconds</p>
                        </div>
                    </div>
                    <button className='btn-add'>Activity Completed</button>

                </div>
            </div>
        </div>
    );
};

export default Home;