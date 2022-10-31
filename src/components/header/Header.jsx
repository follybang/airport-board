import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <span className="material-symbols-outlined header__icon">
          connecting_airports
        </span>
        <span className="header__text">
          Arrival / Departure Timetable Schedule
        </span>
      </div>
    </header>
  );
}

export default Header;
