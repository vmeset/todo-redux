import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { alertReducer } from "./alertReducer"
import { loginReducer } from "./loginReducer"
import { notesReducer } from "./notesReducer"

const rootReducer = combineReducers({
    alert: alertReducer,
    notes: notesReducer,
    login: loginReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))