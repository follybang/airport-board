const baseUrl = `https://api.iev.aero/api/flights/11-01-2022`;

export const fetchFlightsData = () => {
  return fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    } else return response.json();
  });
};
