import { useState } from 'react';
import { updateFlashcard, deleteFlashcard } from '../services/api';

const Flashcard = ({ flashcard, onUpdate, onDelete }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleResponse = async (isCorrect) => {
    await updateFlashcard(flashcard._id, { correct: isCorrect });
    setShowAnswer(false);
    onUpdate();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm font-medium text-gray-500">
          Level {flashcard.level} / 3
        </span>
        <button onClick={() => deleteFlashcard(flashcard._id).then(onDelete)} className="text-red-500 text-sm">
          Delete
        </button>
      </div>

      <div className="text-lg font-medium">{flashcard.question}</div>
      
      {showAnswer && <div className="mt-4 text-gray-600">{flashcard.answer}</div>}

      <div className="mt-4 flex gap-2">
        {!showAnswer ? (
          <button onClick={() => setShowAnswer(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Show Answer
          </button>
        ) : (
          <>
            <button onClick={() => handleResponse(true)} className="bg-green-500 text-white px-4 py-2 rounded">
              Got it Right
            </button>
            <button onClick={() => handleResponse(false)} className="bg-red-500 text-white px-4 py-2 rounded">
              Got it Wrong
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Flashcard;
