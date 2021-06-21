import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/app'
import { addUser } from '../store/api';

const Login = () => {
    
    const {auth} = useSelector(state => state.login)
    const dispatch = useDispatch()

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        dispatch(addUser(user))
    }
    const loginGuest = async () => {
        const provider = firebase.auth().signInAnonymously()
        const {user} = await auth.signInWithPopup(provider)
        dispatch(addUser(user))
    }

    return (
        <div className="container">
            <div>
                <button type="button" onClick={login}>
                    Войти с помощью Google
                </button>
                <button type="button" onClick={loginGuest}>
                    Войти как гость
                </button>
            </div>
        </div>
    );
};

export default Login;