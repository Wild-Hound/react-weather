import React from 'react'

function SearchBar({func,noResFound,btnUpfunc,suggestion}) {

    return (
        <div>
            <input type="text" placeholder="City Name" id="cityName"onKeyUp={() => btnUpfunc()}/>
            <button id="searchBtn" onClick={() => func()}>Search</button>
            {/* <ul>
            {suggestion.city?.map((city, index) =>{
                console.log(city)
                return(
                    <li>{city}</li>
                )
            })}
            </ul> */}
            {noResFound ? <p className="noRes">No Results Found</p> : null}
        </div>
    )
}

export default SearchBar
