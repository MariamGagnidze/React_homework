export function Posts(props) {
  const { src, h1, p } = props;
  return (
    <div className="post">
      <img src={src} alt={h1} />
      <div className="post-content">
        <h2>{h1}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
}
