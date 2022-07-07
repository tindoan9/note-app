import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { NoteListContext } from '../../../App'
import useNoteApp from '../../useNoteApp'

export default function NoteList() {
	const [handleAddNote, handleDeleteNote] = useNoteApp()
	const [noteList, setNoteList] = useContext(NoteListContext)

	const navigate = useNavigate()
	const handleTaskDetail = (item) => {
		navigate(`/note-detail/${item.id}`, { state: { ...item } })
	}
	return (
		<>
			{noteList.map((item, index) => <div
				key={index}>
				<h2>{item.title}</h2>
				<span onClick={() => handleTaskDetail(item)}>(Show Details)</span>
				<span onClick={() => handleDeleteNote(item.id)}>(Remove Note)</span>
			</div>)
			}

		</>
	)
}