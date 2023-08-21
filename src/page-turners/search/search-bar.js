import React from "react";


// title, isbn, page count, published date, thumbnail, short description, long description, status, authors, categories
function SearchBar() {
    return (
        <div className="row">
            <div className="col">
                <p>Search for books by title, author, ISBN, or keywords</p>
                <input
                    className="form-control"
                    type="text"
                    id="search-bar"
                    placeholder="Search Page Turners"
                />
                <div>
                    <button className="btn btn-primary mt-2">
                    Search
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SearchBar;