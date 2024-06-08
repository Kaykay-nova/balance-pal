const ArticleHeader = ({ title, date, coverImage }) => {
  return (
    <div className="main__post--header">
      <a href="/blog" className="main__post--btn">
        Zpět na všechny články
      </a>
      <div className="main__post--header-content">
        {coverImage && (
          <div
            className="main__post--cover"
            style={{ backgroundImage: `url(${coverImage})` }}
          ></div>
        )}
        <div className="main__post--text">
          <h1 className="main__post--title">{title}</h1>
          <p className="main__post--date">Datum publikace: {date}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
