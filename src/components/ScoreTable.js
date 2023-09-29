import React from 'react'

const ScoreTable = ({ userAnswers, questions }) => {
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

return (
    <div className='d-flex flex-column score' >
        <div className="purple welcomeTitle welcomeTitle2">Score {scorePercentage}% </div>
        <div className='welcomeTitle'></div> 
        <div className="progress">
        <div
         className="progress-bar"
         role="progressbar"
         style={{ width: `${scorePercentage}%`, backgroundColor: '#8033ef' }} // Green for correct answers
         aria-valuenow={scorePercentage}
         aria-valuemin="0"
         aria-valuemax="100"
        >
            
        </div>
        <div
           className="progress-bar"
           role="progressbar"
           style={{ width: `${100 - scorePercentage}%`, backgroundColor: '#f1ecf9' }} // Red for incorrect answers
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