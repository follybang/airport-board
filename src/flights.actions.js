import { fetchFlightsData } from './flightsGateway';

export const DATA_RECEIVED = 'FLIGHTS/DATA_RECEIVED';

export const dataReceived = flightsData => {
  return {
    type: DATA_RECEIVED,
    payload: flightsData,
  };
};

export const loadFlightsData = () => {
  return function (dispatch) {
    fetchFlightsData().then(flightsData =>
      dispatch(dataReceived(flightsData.body)),
    );
  };
};
