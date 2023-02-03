import React from 'react';
import { useAuth0} from '@auth0/auth0-react';
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Header = () => {
    const {isAuthenticated} = useAuth0();

    return (
        <div className="header">
            <h1 className="main-heading">Legger Schmegger</h1>
            {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </div>
    );
};

export default Header;