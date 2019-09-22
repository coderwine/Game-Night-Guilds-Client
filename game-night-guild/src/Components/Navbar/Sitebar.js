import React, { useState } from 'react';
import './Sitebar.css';
import Modali, { useModali } from 'modali';

const Sitebar = (props) => {

    const [exampleModal, toggleExampleModal ] = useModali({ 
        animated: true,
        title: 'A Scribes Task',
        large: false,
        closeButton: true,
        centered: false,
        onShow: () => console.log('Modali is shown'),
        onHide: () => console.log('Modali is hidden')
    });

    return(

        <div className="navBar">
            
            <button onClick={toggleExampleModal} type="button" className="btn btn-primary" id="mainMenuBtn"></button>

            <Modali.Modal {...exampleModal}>
                <div className="modalContent">
                <button type="button" onClick="#" id="profileBtn">Profile</button><br/>
                <button type="button" id="gamesBtn"  onClick="#">Games</button><br/>
                <button type="button" id="guildsBtn"  onClick="#">Guilds</button><br/>
                <button type="button" id="guildmatesBtn" onClick="#">Guildmates</button><br/>
                <button type="button" id="diceBtn" onClick="#">Dice</button><br/>
                <button type="button" id="timerBtn" onClick="#">Timer</button><br/>
                <button type="button" id="logoutBtn" onClick="#">Logout</button><br/>
                </div>
            </Modali.Modal>
            
        </div>
    )
}


export default Sitebar;