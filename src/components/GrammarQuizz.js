import React from 'react';
import './GrammarQuizz.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const GrammarQuizz = () => {
    return (
        <div className="grammarQuizz">
            <h2><span>Grammar </span>Quizzes</h2>
            <div className="grammarQuizz__container">
                <ul className="grammarQuizz__list">
                    <li className="list">1. Figure of speech</li>
                    <li className="list">2. Know your Language</li>
                    <li className="list">3. English Writting</li>
                </ul>
            </div>
            <div className="grammarQuizz__option">
                <p>OR</p>
                <button className="btn-secondary">Random Grammar Quiz</button>
                <button className="btn-outline btn-icon">Select Difficulty <ExpandMoreIcon className="more-icon"/></button>
            </div>
        </div>
    )
}

export default GrammarQuizz
