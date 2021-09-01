import React from 'react'
import '../styles/HeaderBar.css';
import '../index.css'
import HeaderBar from './GeneralComps/HeaderBar.js';
import SearchBar from './GeneralComps/SearchBar';
import PostFunc from './GeneralComps/PostFunc'
import HomeChoices from './SpecialComps/HomeChoices';
import { Wrapper, LeftContainer, RightContainer, RTopDiv, RBottomDiv, Nav } from './ComponentStyles/Home.styles'
import SocialSideBar from './SpecialComps/SocialSideBar';
import ProductData from './Products.json'

function Home() {
    return (
        <div className="border-2 relative h-screen">
            <Nav>
                <HeaderBar/>
            </Nav>
            <Wrapper>
                <LeftContainer>
                    <SocialSideBar/>
                </LeftContainer>
                <RightContainer>
                    <RTopDiv>
                        <SearchBar placeholder="Search for a Product..." data={ProductData}/>
                        <PostFunc/>
                    </RTopDiv>
                    <RBottomDiv>
                        <HomeChoices/>
                    </RBottomDiv>
                </RightContainer>
            </Wrapper>
            <div>

            </div>
        </div>
    )
}

export default Home
