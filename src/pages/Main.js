import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showLoaderAction } from '../store/notesReducer';
import { fetchNotes } from '../store/api';

import Form from '../components/Form';
import Notes from '../components/Notes';
import Loader from '../components/Loader'
import Alert from '../components/Alert';

const Main = () => {

    const notes = useSelector(state => state.notes)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(showLoaderAction())
        dispatch(fetchNotes())
    }, [dispatch] )

    const inCompleteNotes = notes.notes.filter(note => !note.completed)

    return (
        <div className="container mt-3">
            <Alert />
            <h2>Список задач</h2>
            <Form />
            <hr />
            {notes.loading
                ? <Loader />
                : <Notes notes={inCompleteNotes} searchVal={notes.searchVal} />
            }
            
        </div>
    );
};

export default Main;