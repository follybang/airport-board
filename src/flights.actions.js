import { fetchFlightsData } from './flightsGateway';

export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS/FLIGHTS_DATA_RECEIVED';

export const flightsDataReceived = flightsData => {
  return {
    type: FLIGHTS_DATA_RECEIVED,
    payload: flightsData,
  };
};

export const getFlightsData = () => {
  return function (dispatch) {
    fetchFlightsData().then(flightsData =>
      dispatch(flightsDataReceived(flightsData.body)),
    );
  };
};
