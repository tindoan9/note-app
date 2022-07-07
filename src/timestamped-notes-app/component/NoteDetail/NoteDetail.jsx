import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useNoteApp from '../../useNoteApp';

export default function NoteDetail() {
	const [handleAddNote, handleDeleteNote] = useNoteApp()
	const navigate = useNavigate()
	const { id } = useParams()
	const location = useLocation()
	return (
		<>
			<div>
				<h2>{location.state.title}</h2>
				<span onClick={navigate(`/note-detail`)}>(Hide Details)</span>
				<span onClick={() => handleDeleteNote(id)}>(Remove Note)</span><hr />
				<p>{location.state.details}</p>
			</div>
		</>
	)
}