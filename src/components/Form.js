import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'

import { showAlertAction } from '../store/alertReducer';
import { addNote } from '../store/api';
import { useLocation } from 'react-router';

const Form = () => {

    const {auth} = useSelector(state => state.login)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const {pathname} = useLocation()

    const formSubmit = (event) => {
        event.preventDefault()
        if(value.trim()) {
            dispatch(showAlertAction({text: `Заметка ${value} успешно добавлена`, type: 'success'}))
            setValue('')
            const note = {
                title: value,
                date: new Date().toJSON(),
                completed: false,
                uid: user.uid,
                category: pathname
            }
            dispatch(addNote(note))
        } else {
            dispatch(showAlertAction({text: `Необходимо ввести название заметки`, type: 'warning'}))
        }
    }

    return (
        <form className="form" onSubmit={event => formSubmit(event)}>
            <input 
                type="text" 
                placeholder="Введите название для новой заметки"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default Form;