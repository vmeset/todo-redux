import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAlertAction } from '../store/alertReducer';
import { addNote } from '../store/api';

const Form = () => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const formSubmit = (event) => {
        event.preventDefault()
        if(value.trim()) {
            dispatch(showAlertAction({text: `Заметка ${value} успешно добавлена`, type: 'success'}))
            setValue('')
            const note = {
                title: value,
                date: new Date().toJSON(),
                completed: false
            }
            dispatch(addNote(note))
        } else {
            dispatch(showAlertAction({text: `Необходимо ввести название заметки`, type: 'warning'}))
        }
    }

    return (
        <form onSubmit={event => formSubmit(event)}>
            <input 
                className="form-control form-control-lg" type="text" 
                placeholder="Введите название для новой заметки"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
};

export default Form;