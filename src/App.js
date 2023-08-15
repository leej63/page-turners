import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import HomeScreen from './page-turners/home-screen';
import ProfileScreen from './page-turners/profile-screen';
import RegisterScreen from './page-turners/user/register-screen';
import LoginScreen from './page-turners/user/login-screen';
import SearchScreen from './page-turners/search';
import DetailScreen from './page-turners/detail-screen';
import { configureStore } from '@reduxjs/toolkit';
import{ Provider } from 'react-redux';
const store = configureStore(
  {reducer: {}}
)


function App() {
  return (
    <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route path="/"             element={<HomeScreen/>}/>
        <Route path="/profile"      element={<ProfileScreen/>}/>
        <Route path="/register"     element={<RegisterScreen/>}/>
        <Route path="/login"        element={<LoginScreen/>}/>
        <Route path="/search"       element={<SearchScreen/>}/>
        <Route path="/details"      element={<DetailScreen/>}/>
      </Routes>
    </HashRouter>
    </Provider>
  );
}

export default App;
