import React from 'react'
import './searchBar.css'

function SearchBar({func,noResFound,btnUpfunc,suggestion,itemAct}) {
    
    return (
        <div className="searchBar">
            <input type="text" placeholder="City Name" id="cityName"onKeyUp={() => btnUpfunc()}/>
            <button id="searchBtn" onClick={() => func()}>Search</button>
            <ul className='searchRes'>
            {suggestion?.map((single, index) =>{
                return(
                    <li className='searchItem' key={index} onClick={(event) => itemAct(event, single.name)}>{single.name}</li>
                )
            })}
            </ul>
            {noResFound ? <p className="noRes">No Results Found</p> : null}
        </div>
    )
}

export default SearchBar
