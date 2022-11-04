import { fetchFlightsData } from './flightsGateway';

export const FLIGHTS_DATA_RECEIVED = 'FLIGHTS/FLIGHTS_DATA_RECEIVED';

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
