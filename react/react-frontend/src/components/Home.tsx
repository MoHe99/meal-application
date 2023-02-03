import React from 'react';
import Admin from "./CheckAdmin";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useAuth0} from "@auth0/auth0-react";

const Home = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="home">
            <h2>Welcome</h2>
            <p>Blablabla</p>
        </div>
    );
}

export default Home;