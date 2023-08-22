import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import "./index.css";

import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";

import { findBookmarkByUserIdthunk, updateBookThunk } from "../services/books-thunks";

function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  const [profile, setProfile] = useState(currentUser);
  const [error, setError] = useState("");
  const [bookmarks, setBookmarks] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = async () => {
    setError("");

    let response = await dispatch(updateUserThunk({ profile }));

    if (response.error) {
      if (response.error.message.includes("400")) {
        if (!profile.role) {
          document.getElementById("role").focus();
          setError("Empty role");
          return;
        }

        if (!profile.username) {
          document.getElementById("username").focus();
          setError("Empty username");
          return;
        }

        if (!profile.firstName) {
          document.getElementById("firstName").focus();
          setError("Empty first name");
          return;
        }

        if (!profile.lastName) {
          document.getElementById("lastName").focus();
          setError("Empty last name");
          return;
        }
      }
    } else {
    }
  };

  const handleLogout = async () => {
    localStorage.setItem("userId", null);
    await dispatch(logoutThunk());
    navigate("/login");
  };
  useEffect(() => {
    async function loadProfile() {
      const userId = localStorage.getItem("userId");
      const { payload } = await dispatch(profileThunk(userId));
      setProfile(payload);
    }

    async function loadBookmarks() {
      try {
        const bookmarksResponse = await dispatch(findBookmarkByUserIdthunk());
        setBookmarks(bookmarksResponse.payload); 
      } catch (error) {
      }
    }
    loadProfile();
    loadBookmarks();
  }, [dispatch]);

  const handleRemoveBookmark = async (book) => {
  try {
    await dispatch(updateBookThunk({
      ...book,
      bookmarked: false
    }));

    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((prevBook) => prevBook._id !== book._id)
    );
  } catch (error) {
  }
  };

  return (
    <>
    <div className="profile-container">
      <div className="profile-form">
        <h1 className="profile-title">My Profile</h1>
        {profile && (
          <>
            <form>
              <div className="form-group mt-2">
                <label htmlFor="role" className="form-label">
                  Role
                </label>
                <select
                  className="form-control"
                  id="role"
                  value={profile.role}
                  disabled
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                  <option value="author">Author</option>
                </select>
              </div>
              <div className="form-group mt2">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  disabled
                  value={profile.username}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      username: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
              <div className="form-group mt2">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  value={profile.firstName}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      firstName: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>
              <div className="form-group mt2">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  value={profile.lastName}
                  onChange={(event) => {
                    const newProfile = {
                      ...profile,
                      lastName: event.target.value,
                    };
                    setProfile(newProfile);
                  }}
                />
              </div>

              {error && <div className="error-message">{error}</div>}
              <div className="d-flex">
                <div>
                  <button
                    className="m-1 btn btn-primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
                <div>
                  <button className="m-1 btn btn-primary" onClick={save}>
                    Save
                  </button>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>

<div className="profile-personal-container">
  <div className="profile-form personal-form">
    <h1 className="profile-title">My Bookmarks:</h1>
    <div className="bookmark-list">
      {bookmarks.length > 0 ? (
        bookmarks.map((book) => (
          <a
            key={book._id}
            href={`?#/details/${book._id}`}
            className="bookmark-card"
          >
            <button
              className="remove-button"
              onClick={(event) => {
                event.preventDefault();
                handleRemoveBookmark(book);
              }}
            >
              Remove
            </button>
            <img
              className="book-thumbnail"
              src={book.thumbnailUrl}
              alt={book.title}
            />
            <h2 className="book-title">{book.title}</h2>
          </a>
        ))
      ) : (
        <p className="no-bookmarks-message">No bookmarks found.</p>
      )}
    </div>
  </div>
</div>
    </>
  );
}

export default ProfileScreen;
