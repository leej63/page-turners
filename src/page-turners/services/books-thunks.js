import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./books-service";


export const findBooksThunk = createAsyncThunk(
    "books/findBooks",
    async () => await service.findBooks()
);

export const findBookThunk = createAsyncThunk(
  "books/findBookById",
  async (bookId) => {
    const foundBook = await service.findBookById(bookId);
    return foundBook;
  }
);

export const findBookByISBNThunk = createAsyncThunk(
  "books/findBookByISBN",
  async (isbn) => {
    const foundBook = await service.findBookByISBN(isbn);
    return foundBook;
  }
);

export const findBookByTitleThunk = createAsyncThunk(
  "books/findBooksByTitle",
  async (title) => {
    const foundBook = await service.findBookByTitle(title);
    return foundBook;
  }
);

export const findBooksByAuthorThunk = createAsyncThunk(
  "books/findBooksByAuthor",
  async (author) => {
    const foundBooks = await service.findBooksByAuthor(author);
    return foundBooks;
  }
);

export const findBookmarkByUserIdthunk = createAsyncThunk(
  "books/findBookmarkByUserId",
  async () => {
    const foundBooks = await service.findBookmarkByUserId();
    return foundBooks;
  }
);

export const findBooksByCategoryThunk = createAsyncThunk(
  "books/findBooksByCategory",
  async (category) => {
    const foundBooks = await service.findBooksByCategory(category);
    return foundBooks;
  }
);

export const deleteBookThunk = createAsyncThunk(
    'books/deleteBook',
    async (bookId) => {
        await service.deleteBook(bookId);
        return bookId;
});

export const createBookThunk = createAsyncThunk(
    'books/createBook',
    async (book) => {
        const newBook = await service.createBook(book)
        return newBook;
});

export const updateBookThunk = createAsyncThunk(
    'books/updateBook',
    async (book) => await service.updateBook(book)
);