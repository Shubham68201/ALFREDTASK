import { useState } from 'react';
import { createFlashcard } from '../services/api';

const AddFlashcard = ({ onFlashcardAdded }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim() || !answer.trim()) return;

    setLoading(true);
    setError(null);

    try {
      await createFlashcard({ question, answer });
      setQuestion('');
      setAnswer('');
      onFlashcardAdded();
    } catch (error) {
      setError('Error creating flashcard');
    }

    setLoading(false);
  };

  return (
    <div className="mb-8 bg-gray-50 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Flashcard</h2>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter question"
          className="w-full p-2 border rounded-md"
        />

        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Enter answer"
          className="w-full p-2 border rounded-md h-24"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors"
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Flashcard'}
        </button>
      </form>
    </div>
  );
};

export default AddFlashcard;
