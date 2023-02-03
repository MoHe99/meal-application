import React, {useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import LogoutButton from "./LogoutButton";
import LoginButton from './LoginButton';

function Profile () {
    const { user, isAuthenticated } = useAuth0();
    console.log(user, isAuthenticated)

    return (
       <div className="profile">
           {isAuthenticated ?
               <div>
                <img src={user?.picture} alt={user?.name} />
                   <div className="menu">
                       <h3>{user?.name}</h3>
                       <p>{user?.email}</p>
                       <LogoutButton/>
                   </div>

               </div> : <LoginButton/>}
       </div>
    );

    <style>

    </style>
};

export default Profile;