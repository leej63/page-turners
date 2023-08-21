import React, { useState } from "react";
import BookModal from "./book-modal.js";


const BookCard = ({ book }) => {
    const [bookItem, setItem] = useState();
    const [show, setShow] = useState(false);
    return (
        <>
        {
            book.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                if(thumbnail != undefined) {
                    return (
                        <>
                        <div className="card" onClick={() => { setShow(true); setItem(item) }}>
                            <img src={thumbnail} alt="book cover thumbnail"/>
                            <div className="bottom">
                                <h4 className="title">{item.volumeInfo.title}</h4>
                                <h5>{item.volumeInfo.authors}</h5>
                            </div>
                        </div>
                        <BookModal show={show} item={bookItem} onClose={() => setShow(false)}/>
                        </>
                    )
                } 
            })
        };
        </>
    )
}
export default BookCard;