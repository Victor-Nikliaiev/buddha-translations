import React from "react";
import { Link, useLocation } from "react-router-dom";

export const HomeLink = () => {
    const location = useLocation();
    if (location.pathname === "/") {
        return null;
    }
    return (
        <Link to='/' key='home'>
            Home
        </Link>
    );
};
