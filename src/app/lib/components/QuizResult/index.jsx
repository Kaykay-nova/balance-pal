import resultTexts from "./results.json" with { type: "json" };
import Link from 'next/link';



export const QuizResult = ({onRestart, answers, posts}) => {
  console.log(posts)

  const calculateResult = () => {
    const categories = ['happy', 'balance', 'workaholic', 'burnout'];
    const counts = categories.map(category => answers.filter(answer => answer === category).length);
    const maxCount = Math.max(...counts);
    const mostChoosenCategory = categories[counts.indexOf(maxCount)];
  
    return mostChoosenCategory;
  };

  return (
  
  <div className='quiz__body'>
    <h2 className='quiz__title'>Váš výsledek</h2>
    <p className='quiz__result'>{resultTexts[calculateResult()].text} {resultTexts[calculateResult()].references.map((refer)=>{
      <Link href={`/posts/${''}`} className="post__buttons--btn result-btn">{refer}</Link>
    })}</p>
    <div className='quiz__result-btn'>
      <button type="button" onClick={() => onRestart()} className="post__buttons--btn result-btn">Opakovat kvíz</button>
      <Link href="/blog" className="post__buttons--btn result-btn">Všechny články</Link>
    </div>
  </div>
  )
}
