import React from 'react';
import '../Auth/Pages.css';
import Sitebar from '../Navbar/Sitebar';
import topBanner from '../../Assets/jokercard.jpg';
import { CustomInput, Form, FormGroup, Row, Label, Col, Input, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const Games = () => {
    
    // Table Layout
    return(
        <div className="userDisplayMain">
            <button className="backIcon"></button>
            <Sitebar className="navbarSpot"/>
            <img className="topImage" src={topBanner} alt="Row of Pawns" />
            <div className="tablePageBack">
                <Table borderless>
                    <thead>
                    <tr>
                        <th>img</th>
                        <th>Title</th>
                        {/* <th>Player Count</th>
                        <th>Games Won</th>
                        <th>Highest Score</th>
                        <th>Last Played</th> */}
                        <th>Rating</th>
                        {/* <th>Comments</th> */}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Pandemic</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Terraformming Mars</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Gloomhaven</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Pandemic</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Terraformming Mars</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                        <td>Gloomhaven</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                        <td>Pandemic</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                        <td>Terraformming Mars</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                        <td>Gloomhaven</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        <td>Pandemic</td>
                        <td>5</td>
                    </tr>
                    </tbody>
                </Table>
                    <div>
                  
                    </div>
              </div>
      </div>
    );
 
    // Base Form Fill Out
    // return(
    //     <div className="userDisplayMain">
    //         <button className="backIcon"></button>
    //         <Sitebar className="navbarSpot"/>
    //         <img className="topImage" src={topBanner} alt="Row of Pawns" />
    //         <div>
    //             <div className="backgroundImageInput" alt="tossed dice">
    //                 <div className="fillOutForm">
    //                 <Form>
    //                     <FormGroup>
                            
    //                         <Col>
    //                             <Input type="text" name="game-title" id="gameTitle" placeholder="Game Title"/>
    //                         </Col>
                            
    //                     </FormGroup>
    //                     <FormGroup className="winCheck">
    //                         <div>
    //                         <Col>
    //                             <span>GAME WON!</span>   
    //                             <CustomInput type="checkbox" id="winCheck" />  
    //                         </Col>
    //                         </div>
    //                     </FormGroup>
    //                     <FormGroup>
                            
    //                         <Col>
    //                             <Input type="date" name="date-played" id="datePlayed" placeholder="Date Played"/>
    //                         </Col>
                            
    //                     </FormGroup>
    //                     <FormGroup>
                            
    //                         <Col>
    //                             <Input type="number" name="score" id="score" placeholder="Your Score"/>
    //                         </Col>
                            
    //                     </FormGroup>
    //                     <FormGroup>
                            
    //                         <Col>
    //                             <Input type="number" name="player-count" id="playerCount" placeholder="Player Count"/>
    //                         </Col>
                            
    //                     </FormGroup>
    //                     <FormGroup>
                            
    //                         <Col>
    //                             <Input type="textarea" name="comment-field" id="commentField" placeholder="Comments" maxLength="500"/>
    //                         </Col>
                            
    //                     </FormGroup>
    //                     <button type="submit" className="submitArrow"></button>
    //                 </Form>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Games;