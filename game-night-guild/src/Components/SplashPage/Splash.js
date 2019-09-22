import React from 'react'
import logo from '../../Assets/white-tower.png';
import './Splash.css';

const Splash = () => {
    return(
    <div className="App mainBackground">        
        <button onClick="#"><img src={logo} className="mainLogo" alt="Enter Site logo" /></button>
        <h1>Game Night Guilds</h1>
    </div>
    )
}

export default Splash;