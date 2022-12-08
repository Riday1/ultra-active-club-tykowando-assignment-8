import React, { useState } from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            <div className="question-and-ans">
                <h4>Question -1 : How does react work ?</h4>
                <p><strong>Ans:</strong> React Js  provide JSX to manipulate and update DOM . React JS creates something called a virtual DOM . The virtual DOm is a copy of the sites DOM . And react js uses this copy to see what part of the actual DOM need to change when an event happened . This features provide better browsing experience to the users . </p>
            </div>
            <div className="question-and-ans">
                <h4>Question -2 : Difference between props and state .</h4>
                <p><strong>Ans : </strong>1.props Are read-only component . It is an object which stores the value of attributes of a tag and work similar to the HTML attributes . It allow passing data from one component to other components . </p>
                <p>2.The state is an updatable structure that is used to contain data or information about the component and change over time . The change in state can happen as a response to user action or system event. It can only be accessed and modified inside the component or by the component directly .</p>
            </div>
            <div className="question-and-ans">
                <h4>Question -3 :Describe the  usecase of useEffect hook except fetching data </h4>
                <p><strong>Ans : </strong>Use effect is one of the most popular hooks because it allow you to perform side effects in function component . some examples of side effects are : fetching data, and timers . here we will talk about timer .</p>
                <p>By using setTimeOut method inside of useEffect hooks we can show time counting in our webpage . </p>
            </div>
        </div>
    );
};

export default Question;