import express from 'express';
import { 
  getFlashcards,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard
} from '../controllers/flashcards.js';

const router = express.Router();

router.get('/', getFlashcards);
router.post('/', createFlashcard);
router.put('/:id', updateFlashcard);
router.delete('/:id', deleteFlashcard);

export default router;