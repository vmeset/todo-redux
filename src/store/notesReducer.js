import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES, 
    SHOW_LOADER, SORT_NOTES, TOGGLE_NOTE, SET_SEARCH_VAL } from "./types"

const initialState = {
    notes: [],
    loading: false,
    searchVal: ""
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER: {
            return {...state, loading: true}
        }
        case ADD_NOTE: {
            return {...state, notes: [...state.notes, action.payload]}
        }
        case FETCH_NOTES: {
            return {...state, notes: action.payload, loading: false}
        }
        case DELETE_NOTE: {
            return {...state, 
                    notes: state.notes.filter(note => note.id !== action.payload)}
        }
        case TOGGLE_NOTE: {
            return {...state, notes: state.notes.map(note => {
                if(note.id === action.payload.id) {
                    if (note.completed) {
                        return {...note, completed: false}
                    } else {return {...note, completed: true}}
                }
                return note
            })}
        }
        case SORT_NOTES: {
            return {...state, notes: action.payload}
        }
        case SET_SEARCH_VAL: {
            return  {...state, searchVal: action.payload}
        }
        default: return {...state}
    }
}

export const addNoteAction = (payload) => ({
    type: ADD_NOTE,
    payload
})
export const deleteNoteAction = (payload) => ({
    type: DELETE_NOTE,
    payload
})
export const fetchNotesAction = (payload) => ({
    type: FETCH_NOTES,
    payload
})
export const showLoaderAction = () => ({
    type: SHOW_LOADER
})
export const toggleNoteAction = (payload) => ({
    type: TOGGLE_NOTE,
    payload
})
export const sortNotesAction = (payload) => ({
    type: SORT_NOTES,
    payload
})
export const setSearchValAction = (payload) => ({
    type: SET_SEARCH_VAL,
    payload
})