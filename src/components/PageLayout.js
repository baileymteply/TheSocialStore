import React from "react";
import "../styles/PageLayout.css";
import SocialSideBar from "./GeneralComps/SocialSideBar.js";

function Layout() {
    return (
        <div className="LayoutBG h-5/6 flex">
            <SocialSideBar/>
        </div>
    );
}

export default Layout;
