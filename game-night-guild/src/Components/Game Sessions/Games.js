import React from 'react';
import '../Auth/Pages.css';
import Sitebar from '../Navbar/Sitebar';
import topBanner from '../../Assets/jokercard.jpg';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';


const Games = () => {
    
    // Table Layout
    return(
        <div className="userDisplayMain">
            <button className="backIcon"></button>
            <Sitebar className="navbarSpot"/>
            <img className="topImage" src={topBanner} alt="Row of Pawns" />
            
            {/* FULL PAGE TABLE */}
                <div className="tablePageBack">
                    <div id="fullPageTable">
                        <Table hover borderless size="sm">
                            <thead>
                                <tr>
                                    <th>img</th>
                                    <th>Title</th>
                                    <th>Player Count</th>
                                    <th>Games Won</th>
                                    <th>Highest Score</th>
                                    <th>Last Played</th>
                                    <th>Rating</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Pandemic</td>
                                    <td>3</td>
                                    <td>Won</td>
                                    <td></td>
                                    <td>09/20/2019</td>
                                    <td>5</td>
                                    <td>Some random comment</td>
                                </tr>
                                
                            </tbody>
                        </Table>
                    <div>
                        <Pagination size="lg" aria-label="Page navigation example" id="fullPagePagination">
                            <PaginationItem>
                                <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href="#" />
                            </PaginationItem>
                        </Pagination>
                    </div>
                    </div>

            {/* TABLE FOR MOBILE */}
                    <div id="mobilePageTable">
                        <Table hover borderless size="sm">
                            <thead>
                                <tr>
                                    <th>img</th>
                                    <th>Title</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Pandemic</td>
                                    <td>3</td>                              
                                </tr>
                            </tbody>
                        </Table>
                        <div>
                            <Pagination size="lg" aria-label="Page navigation example" id="mobilePagination">
                                <PaginationItem>
                                    <PaginationLink first href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink previous href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink next href="#" />
                                </PaginationItem>
                                <PaginationItem>
                                    <PaginationLink last href="#" />
                                </PaginationItem>
                            </Pagination>
                        </div>
                    </div>
              </div>
      </div>
    );
}

export default Games;



///////////////////
