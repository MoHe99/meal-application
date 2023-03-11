import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Meal from "./Meal";
import Protected from "./CheckAdmin";
import Admin from "./AdminDashboard/AdminDashboard";
import CheckAdmin from "./CheckAdmin";
import Authenticated from "./Authenticated";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import {useAuth0} from "@auth0/auth0-react";

function MainNav() {
    const {isAuthenticated} = useAuth0();

    const toggleMobileMenu = () => {
        document.querySelector('.menu')?.classList.toggle('show');
        document.querySelector('.main-nav')?.classList.toggle('mobile');
        document.querySelector('body')?.classList.toggle('no-scroll');
        document.querySelector('.open-mobile-menu')?.classList.toggle('active');
    }
    const closeMobileMenu = () => {
        document.querySelector('.menu')?.classList.remove('show');
        document.querySelector('.main-nav')?.classList.remove('mobile');
        document.querySelector('body')?.classList.remove('no-scroll');
        document.querySelector('.open-mobile-menu')?.classList.remove('active');
    }

    return (
        <BrowserRouter>
            <nav className="main-nav">
                <button className="open-mobile-menu" onClick={() => {toggleMobileMenu()}}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </button>

                <ul className="menu">
                    <li>
                        <Link to={{pathname: "/"}} onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <Authenticated>
                        <li>
                            <Link to={{pathname: "/meal"}} onClick={closeMobileMenu}>Menü</Link>
                        </li>
                        <li>
                            <Link to={{pathname: "/profile"}} onClick={closeMobileMenu}>Profil</Link>
                        </li>
                    </Authenticated>
                    <Protected>
                        <li>
                            <Link to={{pathname: "/admin-dashboard"}} onClick={closeMobileMenu}>Admin Dashboard</Link>
                        </li>
                    </Protected>
                </ul><div className="auth-button">
                {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
            </div>

            </nav>

            <Routes>
                <Route path="/" element={<main><Home/></main>}/>
                <Route path="/profile" element={<main><Authenticated><Profile/></Authenticated></main>}/>
                <Route path="/meal" element={<main><Authenticated><Meal/></Authenticated></main>}/>
                <Route path="/admin-dashboard" element={<main><CheckAdmin><Admin/></CheckAdmin></main>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MainNav;