import React, { useState, useEffect } from 'react';

const TypingTest: React.FC = () => {
  const [words, setWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    // Fetch or generate words for the typing test
    const fetchedWords = ['example', 'words', 'for', 'typing', 'test'];
    setWords(fetchedWords);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    if (startTime === null) {
      setStartTime(Date.now());
    }

    if (e.target.value.endsWith(' ')) {
      if (currentWordIndex < words.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
        setInputValue('');
      } else {
        const endTime = Date.now();
        const timeTaken = (endTime - startTime!) / 1000;
        alert(`Time taken: ${timeTaken} seconds`);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-2xl mb-4">
        {words.map((word, index) => (
          <span
            key={index}
            className={`mr-2 ${index === currentWordIndex ? 'text-blue-500' : ''}`}
          >
            {word}
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="border p-2"
        autoFocus
      />
    </div>
  );
};

export default TypingTest;
