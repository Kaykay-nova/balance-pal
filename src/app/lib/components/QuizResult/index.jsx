'use client';
import resultTexts from "./results.json" with { type: "json" };
import Link from 'next/link';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faRotate } from '@fortawesome/free-solid-svg-icons';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

export const QuizResult = ({ onRestart, answers, posts }) => {
  const animationConfetti = useRef(null);

  useEffect(() => {
    const confettiInstance = lottie.loadAnimation({
      container: animationConfetti.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/animation/animationConfetti.json',
    });
    return () => confettiInstance.destroy();
  }, []);

  const calculateResult = () => {
    const categories = ['happy', 'balance', 'workaholic', 'burnout'];
    const counts = categories.map(category => answers.filter(answer => answer === category).length);
    const maxCount = Math.max(...counts);
    const mostChoosenCategory = categories[counts.indexOf(maxCount)];

    return mostChoosenCategory;
  };

  const result = resultTexts[calculateResult()];
  const resultPosts = posts.filter((post) => {
    return result.references.includes(post.slug);
  });

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='quiz__body'>
      <div id="result__lottie-confetti" ref={animationConfetti}></div>
      <h2 className='quiz__title'>Váš výsledek</h2>
      <p className='quiz__result'>{result.text}</p>
      <ul className="quiz__result-links">
        {resultPosts.map((p) => {
          return (
            <li className="quiz__result-link" key={p.slug} onClick={() => openInNewTab(`/blog/${p.slug}`)}>
              {p.data.title}
            </li>
          );
        })}
      </ul>
      <div className='quiz__result-btn'>
        <button type="button" onClick={onRestart} className="result-btn">
          <FontAwesomeIcon
            className="refresh__icon"
            icon={faRotate}
          />
          Znovu
        </button>
        <Link href="/blog" className="result-btn">Všechny články
          <FontAwesomeIcon
            className="refresh__icon"
            icon={faAngleRight}
          />
        </Link>
      </div>
    </div>
  );
};
