export const fetchFlightsData = selectedDate => {
  return fetch(`https://api.iev.aero/api/flights/${selectedDate}`).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to load data');
      }
    },
  );
};
