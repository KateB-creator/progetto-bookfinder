import axios from 'axios';

// Funzione per fare la richiesta all'API di Open Library
export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
    return response.data.docs;
  } catch (error) {
    console.error('Errore nella richiesta all\'API:', error);
    throw new Error('Errore nel recupero dei dati');
  }
};
