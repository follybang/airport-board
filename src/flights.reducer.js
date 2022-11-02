import { DATA_RECEIVED } from './flights.actions.js';

const initState = {
  flightsData: [],
};

const flightsReducer = (state = initState, action) => {
  switch (action.type) {
    case DATA_RECEIVED: {
      return {
        ...state,
        flightsData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default flightsReducer;
