import React from 'react'
import logo from '../../Assets/white-tower.png';
import './Splash.css';
import {Button} from 'reactstrap';

const Splash = () => {
    return(
    <div className="App mainBackground">        
        <button><img src={logo} className="mainLogo" alt="Enter Site logo" /></button>
        <body>
            <h1>Game Night Guilds</h1>
        </body>
    </div>
    )
}

export default Splash;