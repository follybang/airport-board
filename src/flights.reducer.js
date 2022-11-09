import { FLIGHTS_DATA_RECEIVED, SEARCH_FLIGHTS } from './flights.actions.js';

const initState = {
  flightsData: [],
  filterText: '',
};

const flightsReducer = (state = initState, action) => {
  switch (action.type) {
    case FLIGHTS_DATA_RECEIVED: {
      return {
        ...state,
        flightsData: action.payload,
      };
    }

    case SEARCH_FLIGHTS:
      return {
        ...state,
        filterText: action.payload,
      };

    default:
      return state;
  }
};

export default flightsReducer;
