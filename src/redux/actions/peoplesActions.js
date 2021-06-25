import * as types from '../types/types';

export const addPeople = payload => ({
  type: types.ADD_PEOPLE,
  payload
})

export const fetchPeople = query => async dispatch => {
  const url = query ? `http://api.tvmaze.com/search/people?q=${query}` : "http://api.tvmaze.com/search/people?q=:query"
  const response = await fetch(url);
  const json = await response.json()
  dispatch(addPeople(json))
}

export const setPeopleValue = value => ({
  type: types.PEOPLE_VALUE,
  payload: value
})
