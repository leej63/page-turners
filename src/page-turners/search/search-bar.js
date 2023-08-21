import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import "./search.css";


function SearchBar() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setIsbn] = useState("");
    const [category, setCategory] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSearch = async () => {
        try {
            // await dispatch(searchThunk({ title, author, isbn, category }));
            // navigate("");
        } catch (e) {
            alert(e);
        }
    };
    return (
    <div className="search-container">
        <div className="search-form">
            <h1 className="search-title">Search</h1>
            <p>Search for books by title, author, ISBN, or Category</p>
            <form>
                <div className="form-group mt2">
                    <label htmlFor="title" className="form-label">
                        Search by Title
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="title"
                        placeholder="Enter by title"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div className="form-group mt2">
                    <label htmlFor="author" className="form-label">
                        Search by Author
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="author"
                        placeholder="Enter by author"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div className="form-group mt2">
                    <label htmlFor="isbn" className="form-label">
                        Search by ISBN
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="isbn"
                        placeholder="Enter by ISBN"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div className="form-group mt2">
                    <label htmlFor="category" className="form-label">
                        Search by Category
                    </label>
                    <input
                        className="form-control"
                        type="text"
                        id="category"
                        placeholder="Enter by Category"
                        // value={}
                        // onChange={}
                    />
                </div>
                <div>
                    <button className="btn btn-primary mt-2" onClick={handleSearch}>
                    Search
                    </button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default SearchBar;