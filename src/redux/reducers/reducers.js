import * as types from '../types/types'

import { combineReducers } from 'redux'

const showsInitialState = {data: [], searchValue: ''}
const showsReducer = (state = showsInitialState, action) => {
  switch(action.type) {
    case types.ADD_SHOWS: 
      return {...state, data: [...action.payload]}
    case types.SHOW_VALUE: return {...state, searchValue: action.payload}
    default: return state
  }
}

const peopleInitialState = {data: [], searchValue: ''};
const peoplesReducer = (state = peopleInitialState, action) => {
  switch(action.type) {
    case types.ADD_PEOPLE: 
      return {...state, data: [...action.payload]};
    case types.PEOPLE_VALUE:
      return {...state, searchValue: action.payload}
    default: return state
  }
}

 export const rootReducer = combineReducers({
  shows: showsReducer,
  people: peoplesReducer
})


