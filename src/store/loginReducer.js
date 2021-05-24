import { SET_USER } from "./types"
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDpAmOAJhRmSjohdkNWeM7ubgwJ3-Klkv0",
    authDomain: "react2021-f20eb.firebaseapp.com",
    databaseURL: "https://react2021-f20eb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react2021-f20eb",
    storageBucket: "react2021-f20eb.appspot.com",
    messagingSenderId: "1026031254844",
    appId: "1:1026031254844:web:cf1d3bbfe223418610b239"
  });

const initialState = {
    user: false,
    auth: firebase.auth(),
    firestore: firebase.firestore()
}



export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            return {...state, user: action.payload}
        }
        default: return state
    }
}

export const setUserAction = (payload) => ({
    type: SET_USER,
    payload
})