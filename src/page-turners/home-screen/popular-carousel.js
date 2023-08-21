import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./popular-carousel.css"; 
import popularBooksWeekData from "./popular-books-week.json"; 
import { useNavigate } from "react-router";

function PopularCarousel() {
    const navigate = useNavigate();
    const handleBookClick = (book) => {
        navigate(`/details/${book.id}`);
    };
    return (
        <div className="popular-carousel">
            <h2>What's Popular This Week</h2>
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {popularBooksWeekData.map(book => (
                    <div key={book.id} className="book-card" onClick={() => handleBookClick(book)}>
                        <img src={book.imageSrc} alt={`${book.title} by ${book.author}`} className="book-image" />
                        <h3>{book.title}</h3>
                        <p>{book.author}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default PopularCarousel;
