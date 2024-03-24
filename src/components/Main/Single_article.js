export function Single_post(props) {
    const { className, src, h1, p }=props
    return (
      <div className={className}>
        <img src={src}></img>
        <h1>{h1}</h1>
        <p>{p}</p>
      </div>
    );
  }