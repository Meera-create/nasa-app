import React,{ useState }  from 'react';
import '../styles/search.css'
import getImages from '../requests/getImages';

const Search=({setSearchResults})=>{
const[value,setValue]=useState();

const handleSubmit=async(event)=>{
    event.preventDefault();
    setSearchResults(await getImages(value));
};



    return (
        <div className="search">
        <form className="form" onSubmit={handleSubmit}>
        <input className="searchBox" type="text" onChange={(e)=> setValue(e.target.value)}/>
        <button className="button" type="submit">SEARCH</button>
        </form>
        </div>
    );
};


export default Search;


//onchange will save useres search query every time there is a change in input box