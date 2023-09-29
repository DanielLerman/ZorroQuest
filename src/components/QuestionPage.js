import {React, useState} from 'react'
import ScoreTable from './ScoreTable';

const QuestionPage = () => {
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSubmit = (answerIndex) => {
      setUserAnswers(prevAnswers => [...prevAnswers, answerIndex]);
      setCurrentQuestion(prev => prev + 1);
  };
  const questions = [
    {
      question: "What does Zorro aim to achieve for employers?",
      answers: ["Provide the lowest premium rates", "Create a transparent budget that doesn't fluctuate year-on-year", "Increase coverage options", "None of the above"],
      correctAnswer: 1
    },
    {
      question: "How does Zorro leverage data to find the best benefit bundles for employees?",
      answers: ["By using sophisticated Artificial Intelligence trained with millions of data points", "By randomly selecting benefit options", "By offering a fixed set of benefit bundles", "None of the above"],
      correctAnswer: 0
    },
    {
      question: "What sets Zorro apart in the health insurance market?",
      answers: [" people-first approach combined with technology-driven administration", "Offering the highest premiums", "Excluding certain healthcare providers", "one of the above"],
      correctAnswer: 0

    },
    {
      question: "What is one of the key benefits of using Zorro's platform for employers?",
      answers: ["Seamless administration", "Personalized health benefits for each employee", "Both A and B","None of the above"],
      correctAnswer: 2
    },
    {
      question: "Why is Zorro's mission to address healthcare’s biggest issues important to its founders?",
      answers: ["They believe in making healthcare affordable and accessible for all Americans", "They want to build a category-defining product that impacts everyone", "Both A and B", "None of the above"],
      correctAnswer: 2
    }
  

  ];
  if (currentQuestion >= questions.length) {
    return <ScoreTable userAnswers={userAnswers} questions={questions} />;
}


  const currentQ = questions[currentQuestion];

  return (
    <div className='d-flex flex-column'>
        <div className='question mb-3'>{currentQ.question}</div>
        {currentQ.answers.map((answer, index) => (
            <button className=" d-flex flex-column rounded-pill mb-2 answers" key={index} onClick={() => handleAnswerSubmit(index)}>{answer}</button>
        ))}
    </div>
);
}


export default QuestionPage