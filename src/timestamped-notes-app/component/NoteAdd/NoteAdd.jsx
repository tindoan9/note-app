import React, { useState } from 'react'
import useNoteApp from '../../useNoteApp'
import NoteList from '../NoteList/NoteList'

export default function NoteAdd() {
	const [handleAddNote] = useNoteApp()

	const [noteTitle, setNoteTitle] = useState('')
	const [noteDetails, setNoteDetails] = useState('')

	const addNote = (e) => {
		e.preventDefault()
		handleAddNote(noteTitle, noteDetails)
		setNoteTitle('')
		setNoteDetails('')
	}

	return (
		<>
			<div className="note__add">
				<h1>Timestamped Notes App</h1>
				<div className="input__note">
					<input type="text"
						onChange={(e) => setNoteTitle(e.target.value)}
						placeholder='Note Title'
						value={noteTitle} />
					<input type=""
						onChange={(e) => setNoteDetails(e.target.value)}
						placeholder='Note Details'
						value={noteDetails} />
				</div>
				<button type='button' onClick={addNote}>Add Note</button>
			</div>
		</>
	)
}