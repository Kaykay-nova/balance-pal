'use client';
import { useState, forwardRef } from 'react';
import questions from "./data.json" with { type: "json" };
import { QuizResult } from '../QuizResult';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export const Quiz = forwardRef( ({ onQuit, posts }, ref) => {
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

  

  return (
    <main>
      <div className="quiz__container">

        <form ref={ref} className='quiz__form'>
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
            
            <button type="button" className="quiz__cancel-btn" onClick={handleQuit}>
              <FontAwesomeIcon
                className="close__icon"
                icon={faXmark}
              /></button>
          </div>

          {!quizEnded ? (
            <div className='quiz__body'>
              <h2 className='quiz__question-title'>{questions[questionNumber - 1].title}</h2>
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

            <QuizResult posts={posts} onRestart={handleRestart} answers={answers}/>
          )}

          {!quizEnded && (
            <div className="post__buttons">
              {questionNumber !== 1 ? <button 
                type="button" 
                className="post__buttons--btn" 
                onClick={handlePrevious} 
              >
               &#10094; <span className='btn__text'>Předchozí</span>
              </button> : <div/>}
              
              {questionNumber === questions.length ? (
                <button 
                  type="button" 
                  className="post__buttons--btn" 
                  onClick={handleNext} 
                  disabled={!selectedOption}
                >
                  <span className='btn__text'>Odeslat</span> &#10149;
                </button>
              ) : (
                <button 
                  type="button" 
                  className="post__buttons--btn" 
                  onClick={handleNext} 
                  disabled={!selectedOption}
                >
                  <span className='btn__text'>Další</span> &#10095;
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </main>
  );
});
