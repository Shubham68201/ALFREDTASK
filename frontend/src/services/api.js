import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getFlashcards = async () => {
  try {
    return await api.get('/flashcards');
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    throw error;
  }
};

export const createFlashcard = async (data) => {
  try {
    return await api.post('/flashcards', data);
  } catch (error) {
    console.error('Error creating flashcard:', error);
    throw error;
  }
};

export const updateFlashcard = async (id, data) => {
  try {
    return await api.put(`/flashcards/${id}`, data);
  } catch (error) {
    console.error('Error updating flashcard:', error);
    throw error;
  }
};

export const deleteFlashcard = async (id) => {
  try {
    return await api.delete(`/flashcards/${id}`);
  } catch (error) {
    console.error('Error deleting flashcard:', error);
    throw error;
  }
};

export default api;
