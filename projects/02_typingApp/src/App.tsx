/* import React, { useState, useEffect, useCallback, JSX } from 'react';
import { RefreshCw, Play, Timer, Target, Type } from 'lucide-react';

interface TypingStats {
  wpm: number;
  accuracy: number;
  correctChars: number;
  incorrectChars: number;
}

function App(): JSX.Element {
  const [text, setText] = useState<string>('');
  const [userInput, setUserInput] = useState<string>('');
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    incorrectChars: 0,
  });

  const calculateStats = useCallback((): void => {
    if (!startTime) return;

    const timeElapsed = (Date.now() - startTime) / 1000 / 60; // in minutes
    const wordsTyped = userInput.length / 5; // assume average word length of 5
    const wpm = Math.round(wordsTyped / timeElapsed);

    let correct = 0;
    let incorrect = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] === text[i]) {
        correct++;
      } else {
        incorrect++;
      }
    }

    const accuracy = Math.round((correct / (correct + incorrect)) * 100) || 100;

    setStats({
      wpm,
      accuracy,
      correctChars: correct,
      incorrectChars: incorrect,
    });
  }, [startTime, text, userInput]);

  useEffect(() => {
    if (isStarted) {
      calculateStats();
    }
  }, [userInput, isStarted, calculateStats]);

  const handleStart = (): void => {
    if (!text.trim()) return;
    setUserInput('');
    setIsStarted(true);
    setStartTime(Date.now());
    setStats({
      wpm: 0,
      accuracy: 100,
      correctChars: 0,
      incorrectChars: 0,
    });
  };

  const handleReset = (): void => {
    setUserInput('');
    setIsStarted(false);
    setStartTime(null);
    setStats({
      wpm: 0,
      accuracy: 100,
      correctChars: 0,
      incorrectChars: 0,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (isStarted) {
      setUserInput(e.target.value);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-2">
            <Type className="w-8 h-8" />
            Typing Practice
          </h1>
          <p className="text-gray-600">Improve your typing speed and accuracy</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="customText">
              Custom Text
            </label>
            <textarea
              id="customText"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Enter the text you want to practice typing..."
              value={text}
              onChange={handleTextChange}
              disabled={isStarted}
            />
          </div>

          <div className="flex gap-2 mb-6">
            <button
              onClick={handleStart}
              disabled={!text.trim() || isStarted}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              <Play className="w-4 h-4" />
              Start
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              type="button"
            >
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Timer className="w-4 h-4" />
                <span>WPM</span>
              </div>
              <div className="text-2xl font-bold">{stats.wpm}</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Target className="w-4 h-4" />
                <span>Accuracy</span>
              </div>
              <div className="text-2xl font-bold">{stats.accuracy}%</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Type className="w-4 h-4" />
                <span>Characters</span>
              </div>
              <div className="text-2xl font-bold">
                {stats.correctChars}/{text.length}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="mb-4 p-4 bg-gray-50 rounded-lg text-lg font-mono whitespace-pre-wrap">
              {text.split('').map((char: string, index: number) => {
                let color = 'text-gray-400';
                if (index < userInput.length) {
                  color = userInput[index] === char ? 'text-green-600' : 'text-red-600';
                }
                return (
                  <span key={index} className={color}>
                    {char}
                  </span>
                );
              })}
            </div>
            <textarea
              className="w-full p-4 border rounded-md font-mono focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={isStarted ? "Start typing..." : "Click Start to begin"}
              value={userInput}
              onChange={handleInputChange}
              disabled={!isStarted}
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
 */

import React from 'react';
// import TypingTest from './components/Typing/TypingTest';
import TypingArea from './components/TypingArea/TypingArea';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <TypingTest /> */}
      <TypingArea/>
    </div>
  );
};

export default App;
