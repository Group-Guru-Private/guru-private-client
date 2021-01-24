import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  access_token: null,
  students: []
  
}
function reducer(state = initialState,action){
  
  switch(action.type) {
    case "SET_ACCESS_TOKEN":
        return {...state,access_token:action.payload};
    case "SET_ALL_STUDENT":
      return {...state,students:action.payload};
    case "SET_LOADING":
        return {...state,loading: action.loading};
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store