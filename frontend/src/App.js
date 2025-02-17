import { useEffect, useState } from 'react';
import { getFlashcards } from './services/api';
import FlashcardList from './components/FlashcardList';
import AddFlashcard from './components/AddFlashcard';

function App() {
  const [flashcards, setFlashcards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFlashcards = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await getFlashcards();
      setFlashcards(data);
    } catch (error) {
      setError('Failed to fetch flashcards');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Flashcard Learning System (Up to Level 3)
      </h1>
      <AddFlashcard onFlashcardAdded={fetchFlashcards} />
      {loading ? (
        <p className="text-center text-gray-500">Loading flashcards...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <FlashcardList 
          flashcards={flashcards}
          onFlashcardUpdated={fetchFlashcards}
          onFlashcardDeleted={fetchFlashcards}
        />
      )}
    </div>
  );
}

export default App;
