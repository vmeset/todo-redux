import React from 'react';
import { useDispatch } from 'react-redux';
import * as moment from "moment";

import { deleteNote, toggleNote } from '../store/api';


const Note = ({note}) => {

    const dispatch = useDispatch()

    const formatDate = (date) => {
        return (
            moment(date).format("h:mm, DD.MM.YYYY")
        )
    }

    return (
        <li className="list-group-item note">
            <div>
                <strong>{note.title}</strong>
            </div>
            <div>
                <small>{formatDate(note.date)}</small>
                <button type="button" 
                        className="btn btn-outline-danger btn-sm btn-sm ml-4 mr-4"
                        onClick={() => (
                            dispatch(deleteNote(note.id)
                        ))}
                >
                    &times;
                </button>
                <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
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