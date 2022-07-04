import React, { useContext } from 'react';
import { NoteListContext } from '../App';
import {v4} from 'uuid'
import { useNavigate } from 'react-router-dom';
const useNoteApp = () => {
	const [noteList, setNoteList] = useContext(NoteListContext)
    const navigate = useNavigate()

	const handleAddNote = (title, details) => {
		let addNote = {
			id: v4(),
			title: title,
			details: details
		}
		let newNote = [addNote, ...noteList]
		console.log(newNote);
		setNoteList(newNote)
	}

	const handleDeleteNote = (id) => {
        const deleteTask = noteList.filter(item => item.id !== id)
        setNoteList(deleteTask)
	navigate(`/note-detail`)
	}

	return [handleAddNote, handleDeleteNote, navigate]
}
export default useNoteApp