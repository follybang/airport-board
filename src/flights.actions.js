import { fetchFlightsData } from './flightsGateway';

export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS/FLIGHTS_DATA_RECEIVED';

export const SEARCH_FLIGHTS = 'SEARCH_FLIGHTS';

export const flightsDataReceived = flightsData => {
  return {
    type: FLIGHTS_DATA_RECEIVED,
    payload: flightsData,
  };
};

export const getFlightsData = selectedDate => {
  return function (dispatch) {
    fetchFlightsData(selectedDate).then(flightsData =>
      dispatch(flightsDataReceived(flightsData.body)),
    );
  };
};

export const searchFlights = filterText => {
  return {
    type: SEARCH_FLIGHTS,
    payload: filterText,
  };
};
