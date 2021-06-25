import * as types from "../types/types";

export const addShows = (payload) => ({
  type: types.ADD_SHOWS,
  payload,
});

export const fetchShows = (query) => async (dispatch) => {
  const url = query
    ? `http://api.tvmaze.com/search/shows?q=${query}`
    : `http://api.tvmaze.com/schedule?country=US&date=${`${new Date().toISOString().slice(0, 10)}`}`;
  const response = await fetch(url);
  const json = await response.json();
  const ids = json.map((o) => o.show.id);
  const filtered = json.filter(
    ({ show }, index) => !ids.includes(show.id, index + 1)
  );
  dispatch(addShows(filtered));
};

export const setShowValue = (value) => ({
  type: types.SHOW_VALUE,
  payload: value,
});
