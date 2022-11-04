// const baseUrl = `https://api.iev.aero/api/flights/11-01-2022`;

import moment from 'moment';

const date = moment(new Date(2022, 1, 11)).format('D-MM-YYYY');

export const fetchFlightsData = selectedDate => {
  return fetch(`https://api.iev.aero/api/flights/${selectedDate}`).then(
    response => {
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      } else return response.json();
    },
  );
};
