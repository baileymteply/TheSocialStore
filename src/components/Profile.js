import React from 'react'
import HeaderBar from './GeneralComps/HeaderBar'
import PopUp from './PopUp'
import Axios from 'axios'
import '../index.css'
import './Components.css'
import AllProducts from './SpecialComps/AllProducts'

function Profile() {
    return (
        <div className="border-2 relative h-screen">
            <div className="nav-ele">
                <HeaderBar />
            </div>
            <div className="wrapper-ele">
                <div className="left-container">
                    <AllProducts/>
                </div>
                <div className="right-container">
                    <div className="right-top-ele">
                    </div>
                    <div className="right-bottom-ele">
                        <PopUp/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
