import React from 'react'
import HeaderBar from './GeneralComps/HeaderBar'
import PopUp from './PopUp'
import Axios from 'axios'
import '../index.css'
import { Nav, Wrapper, LeftContainer, RightContainer, RTopDiv, RBottomDiv } from './ComponentStyles/Home.styles'
import AllProducts from './SpecialComps/AllProducts'

function Profile() {
    return (
        <div className="border-2 relative h-screen">
            <Nav>
                <HeaderBar />
            </Nav>
            <Wrapper>
                <LeftContainer>
                    <AllProducts/>
                </LeftContainer>
                <RightContainer>
                    <RTopDiv>
                    </RTopDiv>
                        <PopUp/>
                </RightContainer>
            </Wrapper>
        </div>
    )
}

export default Profile
