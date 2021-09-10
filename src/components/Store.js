import React from 'react'
import '../index.css'
import HeaderBar from './GeneralComps/HeaderBar.js';
import SocialSideBar from './SpecialComps/SocialSideBar';
import SearchBar from './GeneralComps/SearchBar';
import HomeChoices from './SpecialComps/HomeChoices';

function Home() {
    return (
        <div className="border-2 relative h-screen">
            <HeaderBar />
            <div className="homeContainer">
                <div className="barContainer">
                    <SocialSideBar />
                </div>
                <div className="searchChoiceContainer">
                    <SearchBar />
                    <HomeChoices />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
