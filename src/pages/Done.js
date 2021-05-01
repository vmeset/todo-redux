import React from 'react';
import { useSelector } from 'react-redux';

import Notes from '../components/Notes';
import Loader from '../components/Loader'
import Alert from '../components/Alert';

const Done = () => {

    const notes = useSelector(state => state.notes)
    const completedNotes = notes.notes.filter(note => note.completed)

    return (
        <div className="container mt-3">
            <Alert />
            <h2>Список задач</h2>
            <hr />
            {notes.loading
                ? <Loader />
                : <Notes notes={completedNotes} searchVal={notes.searchVal} />
            }
        </div>
    );
};

export default Done;