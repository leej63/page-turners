import React from "react";
import "./home.css";
import bannerImage from "./home-banner-free.png";
import PopularCarousel from "./popular-carousel.js";
import TopRankingCarousel from "./top-ranking-carousel.js";
import { useSelector } from "react-redux";

function HomeScreen() {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className="home-container">
            <div className="header-section">
                <img src={bannerImage} alt="Page Turners Banner" className="banner-image" />
                <div className="header-content">
                    <div className="header-text-container">
                       {currentUser && <h1>Hi, {currentUser.firstName}</h1>} <h1>Welcome to Page Turners</h1>
                        <p>Your source for book recommendations and reviews</p>
                    </div>
                </div>
            </div>
            <div className="about-section">
                <h2>About Us</h2>
                <p>
                    Discover your next great read with Page Turners. We're dedicated to providing curated book recommendations in genres you love.
                </p>
                <p>
                    Share your thoughts and experiences by leaving reviews and ratings for the books you've enjoyed. Join our community of readers today!
                </p>
            </div>
            <br />
            <PopularCarousel />
            <TopRankingCarousel />
        </div>
    );
}

export default HomeScreen;
