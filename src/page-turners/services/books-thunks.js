import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./books-service";


export const findBooksThunk = createAsyncThunk(
    "books/findBooks",
    async () => await service.findBooks()
);

export const deleteBookThunk = createAsyncThunk(
    'books/deleteBook',
    async (bookId) => {
        await service.deleteBook(bookId);
        return bookId;
});

// decide which page to use this
export const createBookThunk = createAsyncThunk(
    'books/createBook',
    async (book) => {
        const newBook = await service.createBook(book)
        return newBook;
});

// decide which page to use this
export const updateBookThunk = createAsyncThunk(
    'books/updateBook',
    async (book) => await service.updateBook(book)
);