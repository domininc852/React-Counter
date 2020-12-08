import { INCREASE, DECREASE, UPDATE_COUNTER_SIZE, RESET_SUM } from './actionTypes'
export const increaseSum = () => {
    return { type: INCREASE }
}

export const decreaseSum = () => {
    return { type: DECREASE }
}

export const updateCounterSize = (size) => {
    return { type: UPDATE_COUNTER_SIZE, payload: size }
}
export const resetSum = () => {
    return { type: RESET_SUM }
}