import React, {useEffect} from "react"
import {useSelector} from "react-redux";
import BookItem from "./book-item";
import booksArray from './books.json';


const BooksList = () => {
    // const { books } = useSelector(state => state.books)
    return (
        <ul className="list-group">
            {
                // books.map(book =>
                //     <BookItem
                //         key={book.id}
                //         book={book}
                //     />
                // )
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