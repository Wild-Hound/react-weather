import React from 'react'

function SearchBar({func}) {
    return (
        <div>
            <input type="text" placeholder="City Name" id="cityName"/>
            <button id="searchBtn" onClick={() => func()}>Search</button>
        </div>
    )
}

export default SearchBar
