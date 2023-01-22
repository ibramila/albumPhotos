import React from "react";
import { Outlet } from "react-router-dom";
import NavbarSide from "../components/NavbarSide";
function MainRoot() {
    return (
        <>
            <NavbarSide />
            <Outlet />
        </>
    );
}

export default MainRoot;