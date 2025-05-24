import React, { useEffect, useState, useRef, useCallback } from "react";

interface TypewriterProps {
  textArray: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  period?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  textArray,
  typingSpeed = 200,
  deletingSpeed = 200,
  period = 2000,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  // FIX: Change NodeJS.Timeout | null to number | null
  const timerRef = useRef<number | null>(null);

  const tick = useCallback(() => {
    const fullWord = textArray[wordIndex % textArray.length];
    let updatedText = "";

    if (isDeleting) {
      updatedText = fullWord.substring(0, currentText.length - 1);
    } else {
      updatedText = fullWord.substring(0, currentText.length + 1);
    }

    setCurrentText(updatedText);

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && updatedText === fullWord) {
      delay = period;
      setIsDeleting(true);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setWordIndex((prevIndex) => prevIndex + 1);
    }

    // Schedule the next tick.
    // setTimeout in browser returns a number
    timerRef.current = setTimeout(tick, delay);
  }, [currentText, isDeleting, wordIndex, textArray, typingSpeed, deletingSpeed, period]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [tick, typingSpeed]);

  return (
    <span className="typewriter">
      {currentText}
      <span className="cursor animate-blink">|</span>
    </span>
  );
};

export default Typewriter;