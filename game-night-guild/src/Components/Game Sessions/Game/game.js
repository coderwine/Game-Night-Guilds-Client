import React from 'react';
import { Form, FormGroup, Col, Input } from 'reactstrap';

const Game = () => {

    return (

            /* Base Form Fill Out */

          <div className="userDisplayMain">
            <button className="backIcon"></button>
            <div>
                <div className="backgroundImageInput" alt="Ace in hand">
                    <div className="fillOutForm">
                    <Form>
                        <FormGroup>
                            <Col>
                                <Input type="text" name="game-title" 
                                id="gameTitle" 
                                placeholder="Game Title"/>
                            </Col> 
                        </FormGroup>
                        <FormGroup>
                            <Col>
                                <Input type="date" name="date-played" id="datePlayed" 
                                placeholder="Date Played"/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col>
                                <Input type="number" 
                                name="score" 
                                id="score" 
                                placeholder="Your Score"/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col>
                                <Input type="number" name="player-count" id="playerCount" placeholder="Player Count"/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col>
                                <Input type="textarea" name="comment-field" id="commentField" placeholder="Comments" maxLength="500"/>
                            </Col>
                        </FormGroup>
                        <FormGroup className="winCheck">
                                <h1>GAME WON?</h1>   
                                <input type="checkbox" id="winCheckbox"/>
                        </FormGroup>
                        <br/>
                        <button type="submit" className="submitArrow"></button>

                    </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game;