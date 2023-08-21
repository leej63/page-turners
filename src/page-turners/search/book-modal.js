import react from 'react';
import { FaTimes } from 'react-icons/fa';


const BookModal = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}><FaTimes/></button>
                <div className="inner-box">
                    <img src={thumbnail} alt="book cover thumbnail"/>
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        {
                            item.volumeInfo.authors.length > 1 ? <h3>Authors: {item.volumeInfo.authors.join(", ")}</h3> : <h3>Author: {item.volumeInfo.authors}</h3>
                        }
                        <h4>Publisher: {item.volumeInfo.publisher}</h4>
                        <h4>Published: {item.volumeInfo.publishedDate}</h4>
                        <h4>ISBN: {item.volumeInfo.industryIdentifiers[0].identifier}</h4>
                        <a href={item.volumeInfo.previewLink}><button className="btn btn-primary mt-2">More</button></a>
                    </div>
                </div>
                <h4 className="description">{item.volumeInfo.description}</h4>
            </div>
        </div>
        </>
    )
}
export default BookModal;