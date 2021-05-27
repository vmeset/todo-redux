import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import _ from 'lodash'

import Note from './Note';

import { sortNotesAction } from '../store/notesReducer';

const Notes = ({notes, searchVal}) => {    

    const [sort, setSort] = useState('asc')
    const dispatch = useDispatch()

    const onSort = (type) => {
        const copyNotes = notes.concat()
        const sortType = sort === 'asc' ? 'desc' : 'asc'
        const orderedNotes = _.orderBy(copyNotes, type, sortType)
        setSort(sortType)
        dispatch(sortNotesAction(orderedNotes))
    }

    return (
        <div>
            <div className="list-group-item sort-buttons">
                <span>Сортировка</span>
                <button className="btn btn-light btn-sm ml-4 mr-4"
                        onClick={() => {
                           onSort("title")
                        }}
                >
                    по имени
                </button>
                <button className="btn btn-light btn-sm"
                        onClick={() => {
                            onSort("date")
                        }}
                >
                    по дате
                </button>
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