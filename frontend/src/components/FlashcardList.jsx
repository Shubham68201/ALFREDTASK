import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards, onFlashcardUpdated, onFlashcardDeleted }) => {
  return (
    <div className="mt-6 space-y-4">
      {flashcards.length === 0 ? (
        <p className="text-center text-gray-500">No flashcards due for review! 🎉</p>
      ) : (
        flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard._id}
            flashcard={flashcard}
            onUpdate={onFlashcardUpdated}
            onDelete={onFlashcardDeleted}
          />
        ))
      )}
    </div>
  );
};

export default FlashcardList;
