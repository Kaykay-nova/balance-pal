'use client';
import { useState } from 'react';
import questions from "./data.json" with { type: "json" };
import resultTexts from "./results.json" with { type: "json" };
import Link from 'next/link';

// const resultTexts = {
//   happy: "Jste šťastný člověk! Zřejmě máte velmi dobrý balanc mezi prací a osobním životem.",
//   balance: "Máte dobrou rovnováhu mezi prací a osobním životem, jen tak dál!",
//   workaholic: "Jste workoholik! Možná byste měli věnovat více času odpočinku a relaxaci.",
//   burnout: "Jste na pokraji vyhoření! Je důležité udělat si čas na sebe a odpočinout si.",
// };

export const Quiz = ({ onQuit }) => {
  const [questionNumber, setQuestionNumber] = useState(1);
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
    if (questionNumber === questions.length) {
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

  const handleQuit = () => {
    if (window.confirm("Opravdu chcete ukončit kvíz?")) {
      onQuit();
    }
  };

  const handleRestart = () => {
    setQuestionNumber(1);
    setSelectedOption(null);
    setAnswers([]);
    setQuizEnded(false);
  };

  const calculateResult = () => {
    const categories = ['happy', 'balance', 'workaholic', 'burnout'];
    const counts = categories.map(category => answers.filter(answer => answer === category).length);
    const maxCount = Math.max(...counts);
    const mostChoosenCategory = categories[counts.indexOf(maxCount)];

    return mostChoosenCategory;
  };
      console.log(resultTexts[calculateResult().text])

  return (
    <main>
      <div className="quiz__container">

        <form className='quiz__form'>
          <div className="quiz__header">
          <div className="quiz__progressbar">
          {!quizEnded ? 
            <div className="quiz__counter">{questionNumber}/{questions.length}</div>  
            : <div/>}

            {!quizEnded ? 
            <div id="progress-bar">
              <div id="bar" style={{ width: `${(questionNumber / questions.length) * 100}%` }}>
              </div>
            </div> 
            : <div/>}
          </div>
            
            {!quizEnded ? 
            <button type="button" className="quiz__cancel-btn" onClick={handleQuit}>Ukončit</button> 
            : <button type="button" className="quiz__cancel-btn" onClick={handleQuit}>Zavřít</button>}
          </div>

          {!quizEnded ? (
            <div className='quiz__body'>
              <h2 className='quiz__title'>{questions[questionNumber - 1].title}</h2>
              <div className='quiz__questions'>
                {questions[questionNumber - 1].options.map((option, index) => (
                  <label key={index} className={selectedOption === option ? 'quiz__question selected__btn' : 'quiz__question'}
                  >
                    <input
                      type={selectedOption === option ? 'hidden' : 'radio'} 
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
            <div className='quiz__body'>
              <h2 className='quiz__title'>Váš výsledek</h2>
              <p className='quiz__result'>{resultTexts[calculateResult()].text}</p>
              <div className='quiz__result-btn'>
                <button type="button" onClick={handleRestart} className="post__buttons--btn result-btn">Opakovat kvíz</button>
                <Link href="/blog" className="post__buttons--btn result-btn">Všechny články</Link>
              </div>
            </div>
          )}

          {!quizEnded && (
            <div className="post__buttons">
              {questionNumber !== 1 ? <button 
                type="button" 
                className="post__buttons--btn" 
                onClick={handlePrevious} 
              >
                &laquo; Předchozí
              </button> : <div/>}
              
              {questionNumber === questions.length ? (
                <button 
                  type="button" 
                  className="post__buttons--btn" 
                  onClick={handleNext} 
                  disabled={!selectedOption}
                >
                  Odeslat
                </button>
              ) : (
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
          )}
        </form>
      </div>
    </main>
  );
};
