import React from 'react';
import { useAuth0} from '@auth0/auth0-react';
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import MainNav from "./MainNav";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Authenticated from "./Authenticated";
import Protected from "./CheckAdmin";
import Home from "./Home";
import Profile from "./Profile";
import Meal from "./Meal";
import CheckAdmin from "./CheckAdmin";
import Admin from "./AdminDashboard/AdminDashboard";

const Header = () => {
    return (
        <header>
            <h1 className="main-heading">Legger Schmegger</h1>
        </header>
    );
};

export default Header;