'use client';
import { useState } from 'react';
import questions from "./data.json" with { type: "json" };
import { QuizResult } from '../QuizResult';



export const Quiz = ({ onQuit, posts }) => {
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

            <QuizResult posts={posts} onRestart={handleRestart} answers={answers}/>
            // <div className='quiz__body'>
            //   <h2 className='quiz__title'>Váš výsledek</h2>
            //   <p className='quiz__result'>{resultTexts[calculateResult()].text} {resultTexts[calculateResult()].references.map((refer)=>{
            //     <Link href={`/posts/${}`} className="post__buttons--btn result-btn">{refer}</Link>
            //   })}</p>
            //   <div className='quiz__result-btn'>
            //     <button type="button" onClick={handleRestart} className="post__buttons--btn result-btn">Opakovat kvíz</button>
            //     <Link href="/blog" className="post__buttons--btn result-btn">Všechny články</Link>
            //   </div>
            // </div>
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
