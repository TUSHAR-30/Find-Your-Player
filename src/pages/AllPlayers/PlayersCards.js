
import React, { useEffect, useState, useRef } from 'react';
import PlayerCard from './PlayerCard';
import './styles/PlayersCards.css'

function Temp2(props) {
    // State to track the current page
    const [currentPage, setCurrentPage] = useState(1);

    //State to show loader or not
    const [isLoading, updatingIsLoading] = useState(false);

    const[totalPlayersafterfilter,updatetotalPlayersafterfilter]=useState(props.playersdata.length)

    //Ref in order to capture the parent of result-header,playercard,pagination
    const loadingref = useRef(null);

    // Calculate the number of pages
    //playersdata=310
    const totalPages = Math.ceil(props.playersdata.length / 20);  //totalpages=16


    // Create an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1); //pageNumbers=[1,2,3,4,....,16]

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        if (loadingref.current && loadingref.current.firstChild) {
            loadingref.current.firstChild.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setTimeout(() => {
            updatingIsLoading(true);
        }, 750);
        setTimeout(() => {
            updatingIsLoading(false);
            setCurrentPage(pageNumber);
        }, 950);
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
        if (loadingref.current && loadingref.current.firstChild) {
            loadingref.current.firstChild.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setTimeout(() => {
            updatingIsLoading(true);
        }, 750);
        setTimeout(() => {
            updatingIsLoading(false);
            setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
        }, 950);
    };

    // Function to handle "Next" button click
    const handleNextClick = () => {
        if (loadingref.current && loadingref.current.firstChild) {
            loadingref.current.firstChild.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setTimeout(() => {
            updatingIsLoading(true);
        }, 750);
        setTimeout(() => {
            updatingIsLoading(false);
            setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
        }, 950);
    };


    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * 20;   //startIndex=0
    const endIndex = currentPage * 20;           //endIndex=20

    // Slice the players data based on the current page
    const playersToShow = props.playersdata.slice(startIndex, endIndex);  //playersToShow=[0th player,1player,2nd player,....,19thplayer]


    useEffect(() => {
        // if (loadingref.current && loadingref.current.firstChild) {
        //     loadingref.current.firstChild.scrollIntoView({ behavior: "smooth", block: "start" });
        // }
        updatingIsLoading(true);
        setCurrentPage(1);
        setTimeout(() => {
            updatingIsLoading(false);
            updatetotalPlayersafterfilter(props.playersdata.length)
        }, 200);
    }, [props.playersdata])

    return (
        <div style={{ backgroundColor: 'white' }}  ref={loadingref}>

            {
                isLoading?'':
                <p className='results-header'>
                {
                    props.playersdata.length > 0 ?
                        `Showing ${startIndex + 1}-${Math.min(endIndex, props.playersdata.length)} of 
                        ${totalPlayersafterfilter} 
                        results`
                        :
                        "No such Filtered Playerd found"
                }
            </p>
            }
        

            {
                isLoading ?
                    <img src='./Loader.svg'></img>
                    :
                    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }} >
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
                            />
                        ))}
                    </ul>
            }


            
            {
                props.playersdata.length > 0 && !isLoading ?
                    <div className='pagination-container'>
                        <div className='showpageno'>Page : {currentPage} of {totalPages}</div>
                        <div className='allpagebtns-container'>
                            <button
                                className={`previous-btn ${currentPage == 1 ? 'hide-previous-btn' : ''}`}
                                onClick={handlePreviousClick}>PREVIOUS
                            </button>
                            <div className='allnumberspage-container'>
                                {displayedPageNumbers.map((pageNumber) => {
                                    return (
                                        <button
                                            key={pageNumber}
                                            onClick={() => handlePageChange(pageNumber)}
                                            className={`numberpage-item ${currentPage === pageNumber ? 'activepage' : ''}`}
                                        >
                                            {pageNumber}
                                        </button>
                                    )
                                })}
                            </div>
                            <button
                                className={`next-btn ${currentPage == endPage ? 'hide-next-btn' : ''}`}
                                onClick={handleNextClick}>NEXT
                            </button>
                        </div>
                    </div>
                    :
                    <div></div>
            }


        </div >
    );
}

export default Temp2;


