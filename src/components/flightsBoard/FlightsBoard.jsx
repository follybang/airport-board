import React, { useState, useEffect, forwardRef } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './flightsBoard.scss';
import { getFlightsData } from '../../flights.actions.js';
import FlightInfo from './FlightInfo.jsx';
import {
  departuresListSelector,
  arrivalsListSelector,
} from '../../flights.selectors';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSessionStorage } from 'usehooks-ts';

const FlightsBoard = ({ getFlightsData, arrivalsList, departuresList }) => {
  const [departuresSelected, changeSelected] = useSessionStorage(
    'departures',
    true,
  );
  const [selectedDate, setDate] = useSessionStorage('test', new Date());

  useEffect(() => {
    getFlightsData(moment(selectedDate).format('D-MM-YYYY'));
  }, [selectedDate]);

  const noFlights = (
    <tr>
      <td colSpan="6" className="no-flights">
        No Flights
      </td>
    </tr>
  );

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const buttons = departuresSelected ? (
    <div className="buttons">
      <Link to="/" className="buttons__departures btn btn_selected">
        <span>DEPARTURES</span>
      </Link>

      <Link
        to="/arrivals"
        className="buttons__arrivals btn"
        onClick={() => changeSelected(false)}
      >
        <span>ARRIVALS</span>
      </Link>
    </div>
  ) : (
    <div className="buttons">
      <Link
        to="/"
        className="buttons__departures btn"
        onClick={() => changeSelected(true)}
      >
        <span>DEPARTURES</span>
      </Link>

      <Link to="/arrivals" className="buttons__arrivals btn btn_selected">
        <span>ARRIVALS</span>
      </Link>
    </div>
  );

  return (
    <BrowserRouter>
      <div className="flights-board">
        {buttons}
        <div className="date">
          <div className="date__container">
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={new Date(selectedDate)}
              onChange={date => setDate(date)}
              customInput={<CustomInput />}
            ></DatePicker>
          </div>
        </div>

        <table className="table">
          <thead className="table__header">
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <Switch>
              <Route exact path="/">
                {departuresList.length === 0
                  ? noFlights
                  : departuresList.map(flightData => (
                      <FlightInfo key={flightData.ID} flightData={flightData} />
                    ))}
              </Route>
              <Route path="/arrivals">
                {arrivalsList.length === 0
                  ? noFlights
                  : arrivalsList.map(flightData => (
                      <FlightInfo key={flightData.ID} flightData={flightData} />
                    ))}
              </Route>
            </Switch>
          </tbody>
        </table>
      </div>
    </BrowserRouter>
  );
};

const mapState = state => {
  return {
    departuresList: departuresListSelector(state),
    arrivalsList: arrivalsListSelector(state),
  };
};

const mapDispatch = {
  getFlightsData,
};

export default connect(mapState, mapDispatch)(FlightsBoard);
