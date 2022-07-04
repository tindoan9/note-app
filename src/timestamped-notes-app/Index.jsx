import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoteAdd from './component/NoteAdd/NoteAdd'
import NoteDetail from './component/NoteDetail/NoteDetail'
import NoteList from './component/NoteList/NoteList'

export function Index() {
   return (
      <>
         <BrowserRouter>
            <NoteAdd></NoteAdd>
            <NoteList></NoteList>
            <Routes>
               <Route path='/note-detail/:id' element={<NoteDetail></NoteDetail>}></Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}