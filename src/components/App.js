import '../styles/app.css';
import React, { useState } from 'react';
import Search from '../components/Search'
import SearchResults from './searchResults';



const App=()=> {

    const[searchResults,setSearchResults] = useState([]);
    //console.log(searchResults);
    // searchResults.map((e)=>console.log(e));

  return (
    <div className="App">
        <img src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasa logo" 
        className="nasa"></img>
        <Search setSearchResults={setSearchResults}/>
        <SearchResults results={searchResults}/>
    </div>
  );
}

export default App;
