 export function Article(props) {
  const { className, img, headingg,titleHeading, title, date, paragraph, bttn, buttonValue, count } = props;

  return (
    <div className={className}>
      <div className="Article-box">
        <div className="Article-image">
          <img src={img} alt="img" />
        </div>
        <div className={headingg}>
          <h3>{titleHeading}</h3>
          <h5>
            {title}, <span>{date}</span>
          </h5>
          <p>{paragraph}</p>
        </div>
      </div>
      <div className={bttn}>
        <button>{buttonValue}</button>
        <div className="comments">
          Comments, <span>{count}</span>
        </div>
      </div>
    </div>
  );
}

export default Article;
