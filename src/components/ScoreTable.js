import React from 'react'
import { AppContext } from '../context/AppContext'

const ScoreTable = ({ userAnswers, questions }) => {
    const { username } = React.useContext(AppContext)
  const calculateScore = () => {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
        if (question.correctAnswer === userAnswers[index]) {
            correctAnswers++;
        }
    });

    return (correctAnswers / questions.length) * 100; 
};

const scorePercentage = calculateScore()
const shouldAnimate = scorePercentage > 0

return (
    <div className='d-flex flex-column score' >

        <div className="purple welcomeTitle welcomeTitle2"> {username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()} Your Score is {scorePercentage}% </div>
        <div className='welcomeTitle'></div> 
        <div className="progress">
        <div
         className={shouldAnimate ? "progress-bar animated" : "progress-bar"}
         role="progressbar"
         style={{width: `${scorePercentage}%`, backgroundColor: '#8033ef'}} 
         aria-valuenow={scorePercentage}
         aria-valuemin="0"
         aria-valuemax="100"
        >  
        </div>
        <div
           className="progress-bar"
           role="progressbar"
           style={{width: `${100 - scorePercentage}%`, backgroundColor: '#f1ecf9'}}
           aria-valuenow={100 - scorePercentage}
           aria-valuemin="0"
           aria-valuemax="100"
        >
        </div>
    </div>
</div>
)
}

export default ScoreTable