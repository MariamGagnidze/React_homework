import { Left } from "./Left";
import { Right } from "./Right";
import "./Main.css";

export default function Main({ className }) {
  return (
    <main className={`main ${className}`}>
      <div className="flex-container">
        <Left className={"left"} />
        <Right className={"right"} />
      </div>
    </main>
  );
}

