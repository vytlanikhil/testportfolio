import React, { useEffect, useState } from 'react';

export default function TypingText({ texts, speed = 80, delay = 1500, deleteSpeed = 40 }) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullText = texts[textIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => currentFullText.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && displayText === currentFullText) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts, speed, delay, deleteSpeed]);

  return (
    <span className="relative">
      {displayText}
      <span className="absolute -right-1 bottom-1 w-0.5 h-[80%] bg-primary dark:bg-primary-light animate-[pulse_1s_infinite]" />
    </span>
  );
}
