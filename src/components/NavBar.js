import React from 'react';
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <div className={'mb-4 mt-4 bg-light text-center fs-4 '}>
            <NavLink to={'/'}>Home</NavLink>
            {" | "}
            <NavLink to={'courses'}>Courses</NavLink>
            {" | "}
            <NavLink to={'about'}>About</NavLink>
        </div>
    );
};
