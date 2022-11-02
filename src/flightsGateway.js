export const fetchFlightsData = selectedDate => {
  return fetch(`https://api.iev.aero/api/flights/11-01-2022`).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};
