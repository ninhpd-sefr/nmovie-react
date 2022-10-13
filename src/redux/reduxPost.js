import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { getFirmItem, getItemFirm, getListFirm, getFirmSearch, getFirmSeries } from '../services/GetFirm';
import { ACTION_GET_COUNTRY_FIRM, ACTION_GET_GENRES_FIRM, ACTION_GET_SERIES_FIRM, ACTION_GET_SINGLE_FIRM } from './action'

const intState = {
    firmSeries: [],
    firmSingle: [],
    firmGenres: [],
    firmCountry: []
}


function counter(state = intState, action) {
    switch (action.type) {
        case ACTION_GET_SERIES_FIRM:
            return {
                ...state,
                firmSeries: action.payload,
            }
        case ACTION_GET_SINGLE_FIRM:
            return {
                ...state,
                firmSingle: action.payload
            }
        case ACTION_GET_GENRES_FIRM:
            return {
                ...state,
                firmGenres: action.payload
            }
        case ACTION_GET_COUNTRY_FIRM:            
            return {
                ...state,
                firmCountry: action.payload
            }

        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter, applyMiddleware(thunk))




export default store;