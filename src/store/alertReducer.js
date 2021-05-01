import { HIDE_ALERT, SHOW_ALERT } from "./types"

const initialState = {
    visible: false
}

export const alertReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_ALERT: {
            return {...state, ...action.payload, visible: true}
        }
        case HIDE_ALERT: {
            return {...state, visible: false}
        }
        default: return state
    }
}

export const showAlertAction = (payload) => ({
    type: SHOW_ALERT,
    payload
})
export const hideAlertAction = () => ({
    type: HIDE_ALERT
})