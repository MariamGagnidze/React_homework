import "./Footer.css";

export default function Footer(props) {
    const { style, text }=props
  return (
    <div className={style}>
      <p>{text}</p>
    </div>
  );
}