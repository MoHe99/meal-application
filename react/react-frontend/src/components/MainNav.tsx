import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Meal from "./Meal";
import Protected from "./CheckAdmin";
import Admin from "./Admin";
import CheckAdmin from "./CheckAdmin";
import Authenticated from "./Authenticated";

function MainNav() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to={{pathname: "/"}}>Home</Link>
                    </li>
                    <Authenticated>
                        <li>
                            <Link to={{pathname: "/profile"}}>Profile</Link>
                        </li>
                        <li>
                            <Link to={{pathname: "/meal"}}>Meal</Link>
                        </li>
                    </Authenticated>
                    <Protected>
                        <li>
                            <Link to={{pathname: "/admin"}}>Admin</Link>
                        </li>
                    </Protected>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/profile" element={<Authenticated><Profile/></Authenticated>}/>
                <Route path="/meal" element={<Authenticated><Meal/></Authenticated>}/>
                <Route path="/admin" element={<CheckAdmin><Admin/></CheckAdmin>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default MainNav;