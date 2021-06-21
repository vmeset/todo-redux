import React from 'react';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'

import Notes from '../components/Notes';
import Loader from '../components/Loader'
import Alert from '../components/Alert';

const Done = () => {

    const notes = useSelector(state => state.notes)
    const {auth} = useSelector(state => state.login)
    const [user] = useAuthState(auth)
    const userNotes = notes.notes.filter(note => note.uid === user.uid)
    const completedNotes = userNotes.filter(note => note.completed && note.category === "/main")

    return (
        <div className="container">
            <Alert />
            <h2>Выполненные задачи</h2>
            <hr />
            {notes.loading
                ? <Loader />
                : <Notes notes={completedNotes} searchVal={notes.searchVal} />
            }
        </div>
    );
};

export default Done;