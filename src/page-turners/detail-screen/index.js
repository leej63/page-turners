import React from "react";
import Nav from "../../nav";
import BooksList from "../books";


function DetailScreen() {
    return (
        <>
            <Nav/>
            <h4>Detail Screen</h4>
            <p>Detail page content goes here.</p>
            <BooksList/>
        </>
    );
};
export default DetailScreen;