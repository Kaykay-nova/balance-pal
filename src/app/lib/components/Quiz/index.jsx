'use client';
import { useState } from 'react';
import questions from "./data.json" with { type: "json" };


export const Quiz = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [quizEnded, setQuizEnded] = useState(false);


  const handleChoice = (choice) => {
    setSelectedOption(choice);
  };

  const handleNext = () => {
    if (selectedOption) {
      setAnswers([...answers, selectedOption.category]);
    }
    if (questionNumber + 1 === questions.length) {
      setQuizEnded(true);
    } else {
      setQuestionNumber(questionNumber + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevious = () => {
    if (questionNumber > 0) {
      setQuestionNumber(questionNumber - 1);
      setSelectedOption(null);
    }
  };

  const calculateResult = () => {
    const result = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    const mostFrequentCategory = Object.keys(result).reduce((a, b) =>
      result[a] > result[b] ? a : b,
    );

    return mostFrequentCategory;
  };

  return (
    <main>
      <div className="quiz__container">
        <form className="quiz__form">
          <div id="scroll" className="quiz__header">
            <div className="quiz__counter">
              {questionNumber + 1}/{questions.length}
            </div>
            <button type="button" className="quiz__cancel-btn">
              Ukončit
            </button>
          </div>

          {!quizEnded ? (
            <div className="quiz__body">
              <h2 className='quiz__title'>{questions[questionNumber].title}</h2>
              <div className='quiz__questions'>
                {questions[questionNumber].options.map((option, index) => (
                  <label key={index} className='quiz__question'>
                    <input 
                      type='radio' 
                      name='quiz_option'
                      checked={selectedOption === option}
                      onChange={() => handleChoice(option)}
                    /> 
                    {option.text}
                  </label>
                ))}
              </div>
            </div>
          ) : (
            <div className="quiz__body">
              <h2 className="quiz__title">Výsledek</h2>
              <p className="quiz__result">
                Vaše nejčastější odpověď je: {calculateResult()}
              </p>
            </div>
          )}

          <div className="post__buttons">
            <button
              type="button"
              className="post__buttons--btn"
              onClick={handlePrevious}
              disabled={questionNumber === 0}
            >
              &laquo; Předchozí
            </button>

            {!quizEnded && (
              <button
                type="button"
                className="post__buttons--btn"
                onClick={handleNext}
                disabled={!selectedOption}
              >
                Další &raquo;
              </button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};
