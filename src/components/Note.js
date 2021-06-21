import React from 'react';
import { useDispatch } from 'react-redux';
import * as moment from "moment";

import { deleteNote, toggleNote } from '../store/api';


const Note = ({note}) => {

    const dispatch = useDispatch()

    const formatDate = (date) => {
        return (
            moment(date).format("DD.MM")
        )
    }

    return (
        <li className="note">
            <div>
                <strong>{note.title}</strong>
            </div>
            <div>
                <small>{formatDate(note.date)}</small>
                <button type="button" 
                        className="btn"
                        onClick={() => (
                            dispatch(deleteNote(note.id)
                        ))}
                >
                    &times;
                </button>
                <button
                    type="button"
                    className="btn"
                    onClick={() => {
                        dispatch(toggleNote(note))
                    }}
                >
                    {note.completed ? `↩` : '✓'}
                </button>
            </div>
        </li>
    );
};

export default Note;