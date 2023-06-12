import './App.css';
import React, { useEffect } from 'react';

// 676ffd05
const API_URL = 'http://www.omdbapi.com?apikey=676ffd05';

function App() {
  
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    document.write(data);
  }
  useEffect(()=>{
    searchMovies('Batman');
  },[]);
  return (
    <div className="App">

    </div>
  );
}

export default App;