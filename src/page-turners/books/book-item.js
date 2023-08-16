import React from "react";
import { useDispatch } from "react-redux";
import { deleteBookThunk } from "../services/books-thunks";
import BookStats from "./book-stats";


const BookItem = (
    {
        book = {
            "_id": 123,
            "title": "The Hunger Games",
            "author": "Suzanne Collins",
            "genre": "Science Fiction",
            "description": "The Hunger Games is a 2008 dystopian novel by the American writer Suzanne Collins. It is written in the voice of 16-year-old Katniss Everdeen, who lives in the future, post-apocalyptic nation of Panem in North America.",
            "image": "hungergames.jpg",
            "link": "https://en.wikipedia.org/wiki/The_Hunger_Games",
            "published": "2008-09-14T00:00:00.000Z",
            "rating": 4.33,
            "reviews": [],
            "bookmarked": false
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteBookHandler = (id) => {
        dispatch(deleteBookThunk(id))
    }
    return (
        <div>
            <li className="list-group-item">
                <div className="row">
                    <img src={`/images/${book.image}`} className="" width={48} alt="book-cover-image"/>
                </div>
                <div className="col-10">
                    <span>Book title: {book.title}</span><br/>
                    <span>Author: {book.author}</span><br/>
                    <span>Genre: {book.genre}</span><br/>
                    <span>Description: {book.description}</span><br/>
                    <span>Published: {book.published}</span><br/>
                    <span>Rating: {book.rating}</span><br/>
                </div>
                <BookStats book={book}/>
            </li>
        </div>
    )
}
export default BookItem;