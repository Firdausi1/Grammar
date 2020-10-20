import React from 'react';
import './Body.css';

const Body = () => {
    return (
        <div className="body">
            <h2 className="body__heading">One more Thing, Darling...</h2>
            <div className="body__container">
            <div className="body__container1">
                <h2><span>Darling,</span> You do realise that <span>your Grammar </span>needs an <span>Upgrade</span>, right?</h2>
                <button className="body__btn1 btn">Grammar Lessons</button>
                <button className="body__btn2 btn">Grammar Blog</button>
                <button className="body__btn3 btn">Grammar Quizzes</button>
            </div>
            <div className="body__container2">
                <img src="../../Layer 2img2.svg" alt="body"/>
            </div>
            </div>
        </div>
    )
}

export default Body
