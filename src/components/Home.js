import React from 'react'
import '../index.css'
import './Components.css'
import HeaderBar from './GeneralComps/HeaderBar.js';
import SearchBar from './GeneralComps/SearchBar';
import PostFunc from './GeneralComps/PostFunc'
import HomeChoices from './SpecialComps/HomeChoices';
import SocialSideBar from './SpecialComps/SocialSideBar';
import ProductData from './Products.json'

function Home() {
    return (
        <div className="border-2 relative h-screen">
            <div className="nav-ele">
                <HeaderBar />
            </div>
            <div className="wrapper-ele">
                <div className="left-container">
                    <SocialSideBar/>
                </div>
                <div className="right-container">
                    <div className="right-top-ele">
                        <SearchBar placeholder="Search for a Product..." data={ProductData}/>
                        <PostFunc/>
                    </div>
                    <div className="right-bottom-ele">
                        <HomeChoices/>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Home
