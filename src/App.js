import './App.css';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";
import HomeScreen from './page-turners/home-screen';
import ProfileScreen from './page-turners/profile-screen';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"             element={<HomeScreen/>}/>
        <Route path="/profile"      element={<ProfileScreen/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
