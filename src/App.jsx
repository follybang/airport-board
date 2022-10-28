import React from 'react';
import Header from './components/header/Header.jsx';
import SearchFlight from './components/searchFlight/SearchFlight.jsx';
import FlightsBoard from './components/flightsBoard/FlightsBoard.jsx';

function App() {
  return (
    <div className="page">
      <Header />
      <SearchFlight />
      <FlightsBoard />
    </div>
  );
}

export default App;
