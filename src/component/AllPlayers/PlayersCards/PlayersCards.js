
import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import './PlayersCards.css'

function PlayersCards(props) {
    // Calculate the number of pages
    //playersdata=310
    const totalPages = Math.ceil(props.playersdata.length / 20);  //totalpages=16

    // Create an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1); //pageNumbers=[1,2,3,4,....,16]

    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the start and end index of displayed page buttons
    let startPage = Math.max(1, currentPage - 4);   //startPage=1
    let endPage = Math.min(startPage + 9, totalPages);  //endPage=10

    // Adjust startPage if endPage is less than 10
    startPage = Math.max(1, endPage - 9);  // startPage=1

    // Slice the page numbers to display only 10 buttons
    const displayedPageNumbers = pageNumbers.slice(startPage - 1, endPage);  //displayedPageNumbers=[0,1,2,..,9]

    // Function to handle "Previous" button click
    const handlePreviousClick = () => {
        setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
    };

    // Function to handle "Next" button click
    const handleNextClick = () => {
        setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
    };

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * 20;   //startIndex=0
    const endIndex = currentPage * 20;           //endIndex=20

    // Slice the players data based on the current page
    const playersToShow = props.playersdata.slice(startIndex, endIndex);  //playersToShow=[0th player,1player,2nd player,....,19thplayer]


    useEffect(()=>{
        setCurrentPage(1);
    },[props.playersdata])

    return (
        <div>
            {
                props.playersdata.length>0?
                <p style={{ height: '50px', fontSize: '1.5rem', fontWeight: 'bold', backgroundColor: 'lightblue', paddingLeft: '20px' }}>Showing {startIndex + 1}-{Math.min(endIndex, props.playersdata.length)} of {props.playersdata.length} results</p>
                :
                <p style={{ height: '50px', fontSize: '1.5rem', fontWeight: 'bold', backgroundColor: 'lightblue', paddingLeft: '20px' }}>No such Filtered Playerd found</p>
            }
            

            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
                {playersToShow.map((playerdata, index) => (
                    <PlayerCard
                        key={index}
                        id={playerdata.player_id}
                        name={playerdata.fullname}
                        age={playerdata.age}
                        country={playerdata.country}
                        role={playerdata.playingrole}
                        image_url={playerdata.image_path}
                        matches={playerdata.matches}
                        runs={playerdata.runs}
                        wickets={playerdata.wickets}
                        average={playerdata.average}
                        // battingaverage={playerdata.batting_average}
                        // bowlingaverage={playerdata.bowling_average}
                    />
                ))}
            </ul>

            {
                props.playersdata.length>0?
                <div style={{ display: 'flex', alignItems: 'center' }}>
                
                {/* Page number */}
                <span style={{ marginRight: '30px' }}>Page {currentPage}:of {totalPages}</span>
                {/* Render "Previous" button */}
                {
                    currentPage!==1?
                    <button onClick={handlePreviousClick} style={{backgroundColor:'transparent',color:'blue',fontWeight:'bold',border:'none',outline:'none',marginRight:'20px'}}>PREVIOUS</button>
                    :
                    <p></p>
                }
                {/* Render page buttons */}
                {displayedPageNumbers.map((pageNumber) => (
                    <button key={pageNumber} onClick={() => handlePageChange(pageNumber)} style={{ margin: '0 5px',width:'20px',backgroundColor:'transparent',border:'none', }} className={currentPage === pageNumber ? 'active' : ''}>{pageNumber}</button>
                ))}
                {/* Render "Next" button */}
                {
                    currentPage!==endPage?
                    <button onClick={handleNextClick}  style={{backgroundColor:'transparent',color:'blue',fontWeight:'bold',border:'none',outline:'none',marginLeft:'20px'}}>NEXT</button>  
                    :
                    <p></p>
                }
            
            </div>
                :
                <div>No player is found</div>
            }

            
        </div>
    );
}

export default PlayersCards;


