import axios from "axios"
import { addNoteAction, deleteNoteAction, fetchNotesAction, toggleNoteAction } from "./notesReducer"

const url = process.env.REACT_APP_DB_URL

export const fetchNotes = () => {
    return async dispatch => {
        const res = await axios(`${url}/notes.json`)
        const payload = Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
        dispatch(fetchNotesAction(payload))
    }
}
export const addNote = (payload) => {
    return async dispatch => {
        const res = await axios.post(`${url}/notes.json`, payload)
        const note = {
            ...payload,
            id: res.data.name,
            completed: false
        }
        dispatch(addNoteAction(note))
    }
}
export const deleteNote = (payload) => {
    return async dispatch => {
        await axios.delete(`${url}/notes/${payload}.json`)
        dispatch(deleteNoteAction(payload))
    }
}
export const toggleNote = (note) => {
    return async dispatch => {
        const toggledNote = {}

        if(note.completed) {
            toggledNote.completed = false
        } else {
            toggledNote.completed = true
        }

        await axios.patch(`${url}/notes/${note.id}.json`, toggledNote)

        dispatch(toggleNoteAction(note))
    }
}