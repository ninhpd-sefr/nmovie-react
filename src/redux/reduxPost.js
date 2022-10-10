import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { getFirmItem, getItemFirm, getListFirm,getFirmSearch } from '../services/GetFirm';
import { DECREMENT, INCREMENT } from './action'

const intState = {
    firmSeries: [],
    state: 0
}


function counter(state = intState, action) {
    switch (action.type) {
        case INCREMENT:
            getFirmSearch('ninh')
            return {
                ...state,
                state: state.state + 1
            }
        case DECREMENT:
            return {
                ...state,
                state: state.state - 1
            }
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter, applyMiddleware(thunk))




export default store;