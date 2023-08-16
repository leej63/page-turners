import { createSlice } from "@reduxjs/toolkit";
import books from './books.json';
import { updateBookThunk, createBookThunk, deleteBookThunk, findBooksThunk } from "../services/books-thunks";
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
                state.error = action.error }
    },
    reducers: {}
});

export default booksSlice.reducer;