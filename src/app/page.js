'use client';
import './style.css';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

export default function Home() {
  const animationContainerMain = useRef(null);

  useEffect(() => {
    const mainInstance = lottie.loadAnimation({
      container: animationContainerMain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation/homepage.json',
    });
    return () => mainInstance.destroy();
  }, []);

  const animationPeople = useRef(null);

  useEffect(() => {
    const peopleInstance = lottie.loadAnimation({
      container: animationPeople.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation/animationPeople.json',
    });
    return () => peopleInstance.destroy();
  }, []);

  const animationQuiz = useRef(null);

  useEffect(() => {
    const quizInstance = lottie.loadAnimation({
      container: animationQuiz.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animation/animationQuiz.json',
    });
    return () => quizInstance.destroy();
  }, []);

  return (
      <main>
        <div className="hero">
          <div id="hero__lottie-main" ref={animationContainerMain}></div>
          <div className="hero__text">
            <h1 className="hero__title">Ztratili jste rovnováhu?</h1>
            <h2 className="hero__subtitle">My vám ji rádi vrátíme!</h2>
          </div>
          <a href="#scroll" className="scroll-btn">
            &dArr;
          </a>
        </div>

        <section className="content" id="scroll">
          <p className="content__paragraph">
            "Určitě jste na internetu našli spoustu rad na téma “worklife
            balance”, ale stále si s tím nevíte rady? Co můžete ve svém životě
            změnit, abyste toho dosáhli? Někdy je těžké najít vlastní střed mezi
            milionem informací.
          </p>

          <div id="content__lottie-people" ref={animationPeople}></div>

          <p className="content__paragraph">
            Naše webová stránka je navržena tak, aby vám poskytla praktické rady
            a tipy, jak dosáhnout harmonie mezi pracovním zápřahem a osobním
            štěstím. Ať už hledáte inspiraci, jak efektivněji plánovat svůj čas,
            nebo potřebujete poradit, jak si udržet zdravé hranice mezi prací a
            domovem, BalancePal je zde pro vás!"
          </p>
        </section>

        <section className="quiz">
          <h2 className="quiz__title">
            Jak dobře balancujete mezi prací a osobním životem?
          </h2>
          <div className="quiz__content">
            <div id="quiz__lottie-quiz" ref={animationQuiz}></div>

            <p className="quiz__text">
              Stačí odpovědět na několik otázek a my vás nasměrujeme na užitečné
              tipy a rady, jak dosáhnout rovnováhy mezi prací a osobním životem.
            </p>
          </div>
          <p className="quiz__ready">Jste připraveni pustit se do toho?</p>
          <button className="quiz__btn">Spustit kvíz</button>
        </section>
      </main>
  );
}
