const baseUrl = `https://api.iev.aero/api/flights/`;

export const fetchFlightsData = selectedDate => {
  return fetch(baseUrl + selectedDate).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    } else return response.json();
  });
};
