import React from 'react';
import '../styles/searchResults.css';

const SearchResults=({results})=>{
    if(!results.length){
        return<p>No results</p>
    }else{
        
    return(
        <div className="allImages">
        {results.map((image)=>(
        
        <img className="card-image" src={image} alt="spaceImage"/>
        
        ))}
    </div>
    )
    }
}



export default SearchResults;