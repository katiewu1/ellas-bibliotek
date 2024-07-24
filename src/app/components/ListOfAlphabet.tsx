import { useState } from "react";
import styles from "./css/ListOfAlphabet.module.css";

const alphabet = "abcdefghijklmnopqrstuvwxyzåäö".split("");

export default function ListOfAlphabet({
  onSelectLetter,
}: {
  onSelectLetter: (letter: string) => void;
}) {
  const [selectedLetter, setSelectedLetter] = useState("");

  return (
    <ul className={styles.list}>
      {alphabet.map((letter) => (
        <div
          key={letter}
          onClick={() => {
            onSelectLetter(letter);
            setSelectedLetter(letter);
          }}
          className={`${styles.letter} ${
            selectedLetter === letter ? styles.letterActive : ""
          }`}
        >
          <ul>
            {letter.toUpperCase()}
            <span className={styles.pipe}> |</span>
          </ul>
        </div>
      ))}
    </ul>
  );
}
