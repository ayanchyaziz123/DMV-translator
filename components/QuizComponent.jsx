"use client";
import { useState } from 'react';


const QuizComponent = ({quizData}) => {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(null));
  const [showFeedbacks, setShowFeedbacks] = useState(Array(quizData.length).fill(false));

  const handleAnswerOptionClick = (index, option) => {
    if (selectedOptions[index] === null && !showFeedbacks[index]) {
      const isCorrect = option === quizData[index].answer.english;
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[index] = option;
      setSelectedOptions(newSelectedOptions);
      if (isCorrect) {
        setScore(score + 1);
      }
      setShowFeedbacks(prevState => {
        const newFeedbacks = [...prevState];
        newFeedbacks[index] = true;
        return newFeedbacks;
      });
    }
  };

  const handleResetQuiz = () => {
    setScore(0);
    setSelectedOptions(Array(quizData.length).fill(null));
    setShowFeedbacks(Array(quizData.length).fill(false));
    setShowScore(false);
  };

  const totalQuestions = quizData.length;

  return (
    <div className="mx-auto py-3 sm:py-6 px-2 sm:px-4">
  <div className="p-4 sm:p-8 rounded-lg">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz Completed!</h2>
            <p className="text-xl font-semibold text-blue-600 mb-4">Your Score: {score}/{totalQuestions}</p>
            <button
              onClick={handleResetQuiz}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none mb-4"
            >
              Restart Quiz
            </button>
            <div className="mt-4">
              {quizData.map((question, index) => (
                selectedOptions[index] !== question.answer.english && (
                  <div key={index} className="mb-4">
                    <p className="text-lg font-semibold">Question {index + 1}: Incorrect</p>
                    <p className="text-gray-800">{question.question.english}</p>
                    <p className="text-red-600">Your answer: {selectedOptions[index]}</p>
                    <p className="text-green-600">Correct answer: {question.answer.english}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        ) : (
          <>
            {quizData.map((question, index) => (
              <div key={index} className="mb-6">
                {question.image && (
    <img src={question.image} alt={`Question ${index + 1}`} className="mb-2" />
  )}
                <p className="text-lg text-gray-800 mb-2">{index + 1}. {question.question.english}</p>
                <p className="text-lg text-gray-800 mb-2">{question.question.nativeLanguage}</p>
                <form className="ml-2 grid gap-2">
                  {question.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="">
                      <input
                        type="radio"
                        name={`option-${index}`}
                        value={option.english}
                        checked={selectedOptions[index] === option.english}
                        onChange={() => handleAnswerOptionClick(index, option.english)}
                        className="form-radio h-5 w-5 text-blue-500"
                        disabled={showFeedbacks[index]}
                      />
                      <span className="ml-2 text-base sm:text-lg text-gray-800">{option.english}</span>
                      <span className="ml-2 text-sm text-gray-500 ">({option.nativeLanguage})</span>
                      
                      
                      
                    </label>
                  ))}
                </form>
              </div>
            ))}
            <div className="text-center">
              <button
                onClick={() => setShowScore(true)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md focus:outline-none"
              >
                Finish Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;




