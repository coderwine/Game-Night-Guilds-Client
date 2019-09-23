import React from 'react';
import './Pages.css';
import Sitebar from '../Navbar/Sitebar';
import scrollIcon from '../../Assets/ancient-scroll.png';
import topBanner from '../../Assets/pawnline.jpg';
import backgroundImage from '../../Assets/dice.jpg';
import Game from '../Game Sessions/Game/game';

const PageOne = () => {

    return(
        <div className="userDisplayMain">
            <div className="backgroundImage">
                <img className="topImage" src={topBanner} alt="Row of Pawns" />
                <Sitebar className="navbarSpot"/>
                <button className="gameInputButton"></button>
            </div>
            {/* <Game/> */}
        </div>
    )
}

export default PageOne;
