'use client';
import { useState } from 'react';
import questions from "./data.json" with { type: "json" };
import Link from 'next/link';


const resultTexts = {
  happy: "Jste šťastný člověk! Zřejmě máte velmi dobrý balanc mezi prací a osobním životem.",
  balance: "Máte dobrou rovnováhu mezi prací a osobním životem, jen tak dál!",
  workaholic: "Jste workoholik! Možná byste měli věnovat více času odpočinku a relaxaci.",
  burnout: "Jste na pokraji vyhoření! Je důležité udělat si čas na sebe a odpočinout si.",
};


export const Quiz = ({ onQuit }) => {
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

  const handleQuit = () => {
    if (window.confirm("Opravdu chcete ukončit kvíz?")) {
      onQuit();
    }
  };

  const handleRestart = () => {
    setQuestionNumber(0);
    setSelectedOption(null);
    setAnswers([]);
    setQuizEnded(false);
  };

  const calculateResult = () => {
    const categories = ['happy', 'balance', 'workaholic', 'burnout'];
    const counts = categories.map(category => answers.filter(answer => answer === category).length);
    const maxCount = Math.max(...counts);
    const mostFrequentCategory = categories[counts.indexOf(maxCount)];

    return mostFrequentCategory;
  };

  return (
    <main>
      <div className="quiz__container">
        <form className='quiz__form'>
          <div id="scroll" className="quiz__header">
            <div className="quiz__counter">{questionNumber + 1}/{questions.length}</div>
            <button type="button" className="quiz__cancel-btn" onClick={handleQuit}>Ukončit</button>
          </div>

          {!quizEnded ? (
            <div className='quiz__body'>
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
            <div className='quiz__body'>
              <h2 className='quiz__title'>Výsledek</h2>
              <p className='quiz__result'>{resultTexts[calculateResult()]}</p>
              <div className='quiz__buttons'>
                <button type="button" onClick={handleRestart} className="quiz__btn">Opakovat kvíz</button>
                <Link href="/blog" className="quiz__btn">Přejít na blog</Link>
              </div>
            </div>
          )}

          {!quizEnded && (
            <div className="post__buttons">
              <button 
                type="button" 
                className="post__buttons--btn" 
                onClick={questionNumber === 0 ? null : handlePrevious} 
              >
                &laquo; Předchozí
              </button>
              {questionNumber + 1 === questions.length ? (
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
}
