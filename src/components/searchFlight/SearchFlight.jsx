import React from 'react';
import './searchFlight.scss';

const SearchFlight = () => {
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
        />
        <button className="search-block__btn">SEARCH</button>
      </div>
    </div>
  );
};

export default SearchFlight;
