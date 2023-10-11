import React,{ useState }  from 'react';
import '../styles/search.css'

const Search=()=>{
const[value,setValue]=useState();


    return (
        <>
        <form className="form">
        <input className="searchBox" type="text" onChange={(e)=> setValue(e.target.value)}/>

        <button className="button" type="submit">SEARCH</button>
        </form>
        </>
    );
};


export default Search;


//onchange will save useres search query every time there is a change in input box