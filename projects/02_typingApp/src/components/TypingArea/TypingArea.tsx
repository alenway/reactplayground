import React, { useState, useEffect } from 'react';

interface TypingStats {
  wpm: number;
  accuracy: number;
  errors: number;
}

const TypingArea: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [script, setScript] = useState('');
  const [typedText, setTypedText] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [stats, setStats] = useState<TypingStats>({
    wpm: 0,
    accuracy: 0,
    errors: 0
  });

  // Handle script input
  const handleScriptChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScript(e.target.value);
    setTypedText('');
    setStartTime(null);
    setStats({ wpm: 0, accuracy: 0, errors: 0 });
  };

  // Handle typing
  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) {
      setStartTime(Date.now());
    }

    const value = e.target.value;
    setTypedText(value);

    // Calculate stats
    const timeElapsed = (Date.now() - (startTime || Date.now())) / 60000; // minutes
    const words = value.trim().split(/\s+/).length;
    const wpm = Math.round(words / timeElapsed) || 0;

    let errors = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== script[i]) errors++;
    }

    const accuracy = script.length > 0
      ? Math.round(((value.length - errors) / script.length) * 100)
      : 0;

    setStats({ wpm, accuracy, errors });
  };

  // Reset everything
  const reset = () => {
    setTypedText('');
    setStartTime(null);
    setStats({ wpm: 0, accuracy: 0, errors: 0 });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Typing Practice</h1>

      {/* Script Input */}
      <div className="mb-6">
        <textarea
          className="w-full p-3 border rounded-lg mb-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Enter your typing script here..."
          value={script}
          onChange={handleScriptChange}
        />
      </div>

      {/* Typing Area */}
      {script && (
        <div className="mb-6">
          <div className="relative">
            <div className="p-4 bg-gray-100 rounded-lg text-gray-500 whitespace-pre-wrap">
              {script}
            </div>
            <input
              type="text"
              className="w-full p-4 border rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={typedText}
              onChange={handleTyping}
              placeholder="Start typing here..."
            />
          </div>
        </div>
      )}

      {/* Stats Display */}
      {startTime && (
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-blue-100 rounded-lg">
            <p className="text-lg font-semibold">{stats.wpm}</p>
            <p className="text-sm text-gray-600">WPM</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <p className="text-lg font-semibold">{stats.accuracy}%</p>
            <p className="text-sm text-gray-600">Accuracy</p>
          </div>
          <div className="p-4 bg-red-100 rounded-lg">
            <p className="text-lg font-semibold">{stats.errors}</p>
            <p className="text-sm text-gray-600">Errors</p>
          </div>
        </div>
      )}

      {/* Reset Button */}
      {script && (
        <button
          className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          onClick={reset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default TypingArea;
