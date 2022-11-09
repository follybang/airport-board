import React, { useState } from 'react';
import './searchFlight.scss';
import { searchFlights } from '../../flights.actions.js';
import { connect } from 'react-redux';

const SearchFlight = ({ searchFlights }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleReturnKey = e => {
    if (e.keyCode === 13) {
      searchFlights(inputValue);
    }
  };

  return (
    <div className="search-flight">
      <h1 className="search-flight__title">SEARCH FLIGHT</h1>
      <div className="search-block">
        <i className="search-block__icon">
          <span className="material-symbols-outlined search-block__img">
            search
          </span>
        </i>

        <input
          type="text"
          placeholder="Flight #"
          className="search-block__input"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleReturnKey}
        />
        <button
          onClick={() => searchFlights(inputValue)}
          className="search-block__btn"
        >
          SEARCH
        </button>
      </div>
    </div>
  );
};

const mapDispatch = {
  searchFlights,
};

export default connect(null, mapDispatch)(SearchFlight);
