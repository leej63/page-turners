import {React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { findBookThunk, updateBookThunk } from "../services/books-thunks";
import "./detail-screen.css"; 
import Rating from "react-rating-stars-component";
import { FaStar, FaRegStar, FaBookmark, FaRegBookmark } from "react-icons/fa";

function DetailScreen() {
    const [book, setBook] = useState(null);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [editedReview, setEditedReview] = useState("");
    const [isEditingReview, setIsEditingReview] = useState(false);
    const dispatch = useDispatch();
    const hash = window.location.hash;
    const bookID = hash.replace("#/details/", "");

    useEffect(() => {    
        const fetchBookDetails = async () => {
            const fetchedBookPromise = dispatch(findBookThunk(bookID));
            fetchedBookPromise.then((fetchedBook) => {
                setBook(fetchedBook.payload);
                setIsBookmarked(fetchedBook.payload.bookmarked);
                setEditedReview(fetchedBook.payload.review);
            });
        };
        fetchBookDetails();
    }, [bookID]);

    if (!book) {
        return <p>Loading...</p>;
    }

    const handleRatingChange = (newRating) => {
        setBook((prevBook) => ({
            ...prevBook,
            rating: newRating
        }));

        dispatch(updateBookThunk({
            ...book,
            rating: newRating
        }));
    };

    const handleBookmarkToggle = () => {
        setIsBookmarked((prevIsBookmarked) => !prevIsBookmarked);

        dispatch(updateBookThunk({
            ...book,
            bookmarked: !isBookmarked
        }));
    };

    const handleReviewEditClick = () => {
        setIsEditingReview(true);
    };

    const handleReviewInputChange = (event) => {
        setEditedReview(event.target.value);
    };

    const handleReviewSaveClick = (event) => {
        setIsEditingReview(false);
        setEditedReview(event.target.value);
        dispatch(updateBookThunk({
            ...book,
            review: editedReview
        }));
    };

    return (
        <div className="detail-container">
            <div className="book-details">
                    <img src={book.thumbnailUrl} alt={book.title} className="book-image" />
                        <div className="book-info">
                            <h2 className="book-title">{book.title}</h2>
                            <p className="book-authors">Author(s): {book.authors.join(", ")}</p>
                            <p>Published Date: {new Date(book.publishedDate).toLocaleDateString()}</p>
                            <p>ISBN: {book.isbn}</p>
                            <p>Page Count: {book.pageCount}</p>
                            <p>Categories: {book.categories.join(", ")}</p>
                            <p>Rating: {book.rating}</p>
                            {book.shortDescription && (<p className="book-description">Short Description: {book.shortDescription}</p>)}
                            <p className="book-description">Long Description: {book.longDescription}</p>
                            <p>Status: {book.status}</p>
                                            <p>
                    Review:{" "}
                    {!isEditingReview ? (
                        editedReview || "No review available"
                    ) : (
                        <input
                            type="text"
                            value={editedReview}
                            onChange={handleReviewInputChange}
                            placeholder="Book review"
                        />
                    )}
                </p>
                <div className="review-button-container">
                    {!isEditingReview ? (
                        <button
                            className={`edit-button ${book.review ? "" : "create-button"}`}
                            onClick={handleReviewEditClick}
                        >
                            {book.review ? "Edit" : "Create"}
                        </button>
                    ) : (
                        <button className="save-button" onClick={handleReviewSaveClick}>
                            Save
                        </button>
                    )}
                </div>
                            <br />
                            <h4>Bookmark this book: </h4>
                            <div className="bookmark-container">
                                {isBookmarked ? (
                                    <FaBookmark onClick={handleBookmarkToggle} />
                                ) : (
                                    <FaRegBookmark onClick={handleBookmarkToggle} />
                                )}
                            </div>
                            <br />
                            <h4>Rate this book: </h4>
                            <div className="rating-container">
                                <Rating
                                    count={5}
                                    value={book.rating}
                                    onChange={handleRatingChange}
                                    size={30} 
                                    activeColor="#ffd700"
                                    emptyIcon={<span className="stars">&#9734;</span>} 
                                    filledIcon={<span className="stars active">&#9733;</span>} 
                                />
                            </div>
                </div>
            </div>
        </div>
    );

}

export default DetailScreen;