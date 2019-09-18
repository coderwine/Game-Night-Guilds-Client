import React from 'react';
import './Pages.css';
import Sitebar from '../Navbar/Sitebar';
import scrollIcon from '../../Assets/ancient-scroll.png';
import topBanner from '../../Assets/pawnline.jpg';
import backgroundImage from '../../Assets/dice.jpg';


const PageOne = () => {

    return(
        <div className="userDisplayMain">
            <Sitebar className="navbarSpot"/>
            <img className="topImage" src={topBanner} alt="Row of Pawns" />
            <div>
                <img  className="backgroundImage" src={backgroundImage} alt="three die"/>
                <button className="gameInputButton"></button>
            </div>
        </div>
    )
}

export default PageOne;
