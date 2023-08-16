import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import BookItem from "./book-item";
import { findBooksThunk } from "../services/books-thunks";
import booksArray from './books.json';


const BooksList = () => {
    // const { books, loading } = useSelector(state => state.books);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(findBooksThunk());
    // }, [])
    return (
        <ul className="list-group">
            {/* { 
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            } */}
            {/* {
                books.map(book =>
                    <BookItem
                        key={book.id}
                        book={book}
                    />
                )
            } */}
            {
                booksArray.map(book =>
                    <BookItem
                        key={book.id}
                        book={book}
                    />    
                )
            }
        </ul>
    )
}
export default BooksList;