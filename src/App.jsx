import React from 'react';
import Header from './components/header/Header.jsx';
import SearchFlight from './components/searchFlight/SearchFlight.jsx';
import FlightsBoard from './components/flightsBoard/FlightsBoard.jsx';
import { Provider } from 'react-redux';
import store from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <div className="page">
        <Header />
        <div className="main">
          <SearchFlight />
          <FlightsBoard />
        </div>
      </div>
    </Provider>
  );
};

export default App;
