import React from 'react';
import Admin from "./CheckAdmin";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useAuth0} from "@auth0/auth0-react";

const Home = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="home">
            <h2>Gude wie!</h2>
            <p>Muss net schmegge, muss wirge! Des ham mer schon oft gehert. Ai sischä is die Wirkung wischtisch abbä son bissche Mundwassä daffs vorher schon ach sin!
                Abbä macht eich kei Sorsche! Unser Esse tut wirge und schmegge!</p>
        </div>
    );
}

export default Home;