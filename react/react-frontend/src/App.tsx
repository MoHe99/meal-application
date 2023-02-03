import React from 'react';
import './index.css';
import Profile from "./components/Profile";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Meal from "./components/Meal";

function App() {
    return (
        <div className="app">
            <Profile/>
            <h1>Legger schmegger</h1>
            <Meal/>
        </div>
    );
}

export default App;
