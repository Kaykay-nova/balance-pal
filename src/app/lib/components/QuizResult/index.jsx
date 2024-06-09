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

  const result = resultTexts[calculateResult()];
  const resultPosts = posts.filter((post) => {
    return result.references.includes(post.slug)
  })

  return (
  
  <div className='quiz__body'>
    <h2 className='quiz__title'>Váš výsledek</h2>
      <p className='quiz__result'>{result.text} 
    </p>
    <ul>
      {resultPosts.map((p)=> {
       return( <li>
          <Link href={`/posts/${p.slug}`}>{p.data.title}</Link>
          </li>)
      })}
    </ul>
    <div className='quiz__result-btn'>
      <button type="button" onClick={() => onRestart()} className="post__buttons--btn result-btn">Opakovat kvíz</button>
      <Link href="/blog" className="post__buttons--btn result-btn">Všechny články</Link>
    </div>
  </div>
  )
}