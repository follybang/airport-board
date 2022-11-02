import { fetchFlightsData } from './flightsGateway';

export const DATA_RECEIVED = 'FLIGHTS/DATA_RECEIVED';

export const dataReceived = flightsData => {
  return {
    type: DATA_RECEIVED,
    payload: flightsData,
  };
};

export const loadFlightsData = selectedDate => {
  return function (dispatch) {
    fetchFlightsData(selectedDate).then(flightsData =>
      dispatch(dataReceived(flightsData.body)),
    );
  };
};
