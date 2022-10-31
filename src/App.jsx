import React from 'react';
import Header from './components/header/Header.jsx';
import SearchFlight from './components/searchFlight/SearchFlight.jsx';
import FlightsBoard from './components/flightsBoard/FlightsBoard.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <div className="main">
        <SearchFlight />
        <FlightsBoard />
      </div>
    </div>
  );
}

export default App;
