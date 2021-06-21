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
    const buyNotes = userNotes.filter(note => !note.completed && note.category === "/buy")

    return (
        <div className="container">
            <Alert />
            <h2>Список покупок</h2>
            <Form />
            <hr />
            {notes.loading
                ? <Loader />
                : <Notes notes={buyNotes} searchVal={notes.searchVal} />
            }
        </div>
    );
};

export default Main;