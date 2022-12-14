export const departuresListSelector = state => {
  const departures = state.flightsData.departure || [];
  return departures
    .slice()
    .filter(flight =>
      flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(state.filterText.toLowerCase()),
    );
};

export const arrivalsListSelector = state => {
  const arrivals = state.flightsData.arrival || [];
  return arrivals
    .slice()
    .filter(flight =>
      flight.codeShareData[0].codeShare
        .toLowerCase()
        .includes(state.filterText.toLowerCase()),
    );
};
