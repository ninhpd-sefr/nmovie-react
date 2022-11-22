import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ACTION_GET_COUNTRY_FIRM, ACTION_GET_FIRM_ITEM, ACTION_GET_FIRM_SEARCH, ACTION_GET_GENRES_FIRM, ACTION_GET_LIST_FIRM_DETAILS, ACTION_GET_SERIES_FIRM, ACTION_GET_SINGLE_FIRM } from './action'

const intState = {
    firmSeries: [],
    firmSingle: [],
    firmGenres: [],
    firmCountry: [],
    firmListDetails: [],
    firmSearch: [],
    firmItem: {}

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
        case ACTION_GET_LIST_FIRM_DETAILS:
            return {
                ...state,
                firmListDetails: action.payload
            }
        case ACTION_GET_FIRM_SEARCH:
            return {
                ...state,
                firmSearch: action.payload
            }

        case ACTION_GET_FIRM_ITEM:
            return {
                ...state,
                firmItem: action.payload
            }

            
            
            

        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter, applyMiddleware(thunk))




export default store;