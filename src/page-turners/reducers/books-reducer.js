import { createSlice } from "@reduxjs/toolkit";
import books from './books.json';
import { updateBookThunk, createBookThunk, deleteBookThunk, findBooksThunk, findBookByISBNThunk, findBookByTitleThunk, findBooksByAuthorThunk, findBooksByCategoryThunk } from "../services/books-thunks";
const initialState = {
    books: [],
    loading: false
}


const booksSlice = createSlice({
    name: 'books',
    initialState,
    extraReducers: {
        [updateBookThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const bookIdx = state.books.findIndex((b) => b._id === payload._id)
                state.books[bookIdx] = { ...state.books[bookIdx], ...payload }},
        [createBookThunk.fulfilled]:
            (state, {payload}) => {
                state.loading = false
                state.books.push(payload)},
        [deleteBookThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.books = state.books.filter(b => b._id !== payload)},
        [findBooksThunk.pending]:
            (state) => {
                state.loading = true
                state.books = [] },
        [findBooksThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.books = payload },
        [findBooksThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error },
        [findBooksByAuthorThunk.pending]:
            (state) => {
                state.loading = true
                state.books = [] },
        [findBooksByAuthorThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.books = payload },
        [findBooksByAuthorThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error },
        [findBooksByCategoryThunk.pending]:
            (state) => {
                state.loading = true
                state.books = [] },
        [findBooksByCategoryThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.books = payload },
        [findBooksByCategoryThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error },
        [findBookByISBNThunk.pending]:
            (state) => {
                state.loading = true
                state.books = [] },
        [findBookByISBNThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.books = payload },
        [findBookByISBNThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error },
        [findBookByTitleThunk.pending]:
            (state) => {
                state.loading = true
                state.books = [] },
        [findBookByTitleThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.books = payload },
        [findBookByTitleThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error }
},
    reducers: {}
});

export default booksSlice.reducer;