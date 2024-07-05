import { useState } from "react";

function App() {
const [currentQuestion, setCurrenQuestion] = useState(0);
const [score, setScore] = useState(0);
const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: 'Where does the sun rises?',
      options: ['east', 'west', 'north', 'south'],
      correctAnswer: 'east',
    },
    {
      question: 'Capital of Pakistan?',
      options: ['peshawar', 'islamabad', 'karachi', 'lahore'],
      correctAnswer: 'islamabad',
    },
    {
      question: 'What is 2 + 1?',
      options: [1, 2, 3, 4],
      correctAnswer: 3,
    }
  ];

  function handleOptionClick(selectedOption) {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrenQuestion(nextQuestion);
    }
    else {
      setShowScore(true);
    }
  }

  return (
    <div className="root-container">
    <h1 className="main-heading">Quiz Application</h1>

    {showScore ? (
      <p>You got {score} questions right out of {questions.length}</p>
    ) : (
      <>
        <h3 className="current-question">{questions[currentQuestion].question}</h3>

        <div className="options-container">
        {questions[currentQuestion].options.map((option, index)=> {
          return <button key={index} onClick={() => handleOptionClick(option)}>{option}</button>
        })}
        </div>
      </>
    )}

    </div>
  )
}

export default App
