import "./App.css";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import HomeScreen from "./page-turners/home-screen";
import ProfileScreen from "./page-turners/profile-screen";
import RegisterScreen from "./page-turners/user/register-screen";
import LoginScreen from "./page-turners/user/login-screen";
import SearchScreen from "./page-turners/search";
import DetailScreen from "./page-turners/detail-screen";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import authReducer from "./page-turners/reducers/auth-reducer";
import booksReducer from "./page-turners/reducers/books-reducer";
import Nav from "./nav";
import AuthContext from "./page-turners/user/auth-context";
import ProtectedRoute from "./page-turners/user/protected-route";

const store = configureStore({
  reducer: {
    books: booksReducer,
    user: authReducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <AuthContext>
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProtectedRoute><ProfileScreen /></ProtectedRoute>} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/search" element={<SearchScreen />} />
            <Route path="/details" element={<DetailScreen />} />
          </Routes>
        </HashRouter>
      </AuthContext>
    </Provider>
  );
}

export default App;
