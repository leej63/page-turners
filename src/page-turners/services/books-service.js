import axios from 'axios';
const BOOKS_API = 'http://localhost:4000/api/books';


export const createBook = async (book) => {
    const response = await axios.post(BOOKS_API, book);
    return response.data;
}

export const findBooks = async () => {
    const response = await axios.get(BOOKS_API);
    const books = response.data;
    return books;
}

export const deleteBook = async (bid) => {
    const response = await axios.delete(`${BOOKS_API}/${bid}`);
    return response.data;
}

export const updateBook = async (book) => {
    const response = await axios.put(`${BOOKS_API}/${book._id}`, book);
    return book;
}