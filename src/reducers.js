import { combineReducers } from 'redux'
import { INCREASE } from './actionTypes'
const sum = (state = 0, action) => {
    if (action.type === INCREASE) {
        return state + 1;
    }
    return state;
}

export default combineReducers(
    {
        sum
    }
)