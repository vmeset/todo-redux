import React from 'react';

import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'

import Form from '../components/Form';
import Notes from '../components/Notes';
import Loader from '../components/Loader'
import Alert from '../components/Alert';

const Main = () => {

    const notes = useSelector(state => state.notes)
    const {auth} = useSelector(state => state.login)
    const [user] = useAuthState(auth)

    const userNotes = notes.notes.filter(note => note.uid === user.uid)
    const inCompleteNotes = userNotes.filter(note => !note.completed && note.category === "/main")

    return (
        <div className="container">
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