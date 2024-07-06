import { FC } from 'react'
import { Note } from '../types/types.ts'
import NoteItem from './NoteItem'

interface NoteListProps {
  filteredNotes: Note[]
  search: string
}

const NoteList: FC<NoteListProps> = ({ filteredNotes, search }) => {
  return (
    <div>
      <div className='note-list'>
        {search.trim() === '' && (
          <h2 style={{ marginTop: '30px', color: 'orange' }}>No notes</h2>
        )}
        {search.trim() !== '' && filteredNotes.length === 0 && (
          <h2 style={{ marginTop: '30px', color: 'orange' }}>
            There are no notes with this title
          </h2>
        )}
        {filteredNotes.length > 0 &&
          filteredNotes.map(note => <NoteItem key={note.id} note={note} />)}
      </div>
    </div>
  )
}

export default NoteList
