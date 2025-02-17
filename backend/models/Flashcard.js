import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  level: { type: Number, default: 1, max: 3 }, // Max level set to 3
  nextReview: { type: Date, default: Date.now }
});

export default mongoose.model('Flashcard', flashcardSchema);
