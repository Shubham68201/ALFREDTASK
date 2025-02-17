import Flashcard from '../models/Flashcard.js';

// Get all flashcards due for review
export const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({
      nextReview: { $lte: new Date() }
    });
    res.status(200).json(flashcards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching flashcards", error: error.message });
  }
};

// Create a new flashcard
export const createFlashcard = async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ message: "Question and answer are required" });
  }

  try {
    const newFlashcard = new Flashcard({
      question,
      answer,
      level: 1, // Start at Level 1
      nextReview: new Date(),
    });

    await newFlashcard.save();
    res.status(201).json(newFlashcard);
  } catch (error) {
    res.status(400).json({ message: "Error creating flashcard", error: error.message });
  }
};

// Update flashcard based on user response (Leitner System Logic)
export const updateFlashcard = async (req, res) => {
  const { id } = req.params;
  const { correct } = req.body;

  if (typeof correct !== 'boolean') {
    return res.status(400).json({ message: "Correct must be a boolean value" });
  }

  try {
    const flashcard = await Flashcard.findById(id);

    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    // Leitner System logic (up to Level 3)
    if (correct) {
      flashcard.level = Math.min(flashcard.level + 1, 3); // Max level 3
    } else {
      flashcard.level = 1; // Reset to Level 1 if incorrect
    }

    // Define review intervals for 3 levels
    const intervals = [1, 3, 7]; // Days for each level
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + intervals[flashcard.level - 1]);

    flashcard.nextReview = nextReview;
    await flashcard.save();

    res.status(200).json(flashcard);
  } catch (error) {
    res.status(400).json({ message: "Error updating flashcard", error: error.message });
  }
};

// Delete a flashcard
export const deleteFlashcard = async (req, res) => {
  const { id } = req.params;

  try {
    const flashcard = await Flashcard.findByIdAndDelete(id);

    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }

    res.status(200).json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting flashcard", error: error.message });
  }
};
