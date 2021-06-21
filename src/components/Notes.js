import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group'

import { setSearchValAction } from '../store/notesReducer';

import _ from 'lodash'


import Note from './Note';

import { sortNotesAction } from '../store/notesReducer';

const Notes = ({notes}) => {    

    const [sort, setSort] = useState('asc')
    const dispatch = useDispatch()
    const searchVal = useSelector(state => state.notes.searchVal)

    const onSort = (type) => {
        const copyNotes = notes.concat()
        const sortType = sort === 'asc' ? 'desc' : 'asc'
        const orderedNotes = _.orderBy(copyNotes, type, sortType)
        setSort(sortType)
        dispatch(sortNotesAction(orderedNotes))
    }

    return (
        <div className="notes-block">
            <div className="sort-buttons">
                <span>Сортировка</span>
                <button className="btn"
                        onClick={() => {
                        onSort("title")
                        }}
                >
                    по имени
                </button>
                <button className="btn"
                        onClick={() => {
                            onSort("date")
                        }}
                >
                    по дате
                </button>
            </div>
            <div className="search">
                <form className="form-inline">
                    <input type="text" placeholder={"поиск по заметкам"} className="form-control"
                        onChange={(e) => dispatch(setSearchValAction(e.target.value))}/>
                </form>
            </div>
            <TransitionGroup component="ul" className="list-group">
                {notes.filter(val => {
                    if (searchVal === "") {
                        return val
                    } else if (val.title.toLowerCase().includes(searchVal.toLowerCase())) {
                        return val
                    }
                    }).map(note => {
                        return <CSSTransition
                                    key={note.id}
                                    classNames={'note'}
                                    timeout={800}
                                >
                                    <Note note={note} />
                                </CSSTransition>
                    })}
            </TransitionGroup>
        </div>
    );
};

export default Notes