import { FC, useEffect, useState } from 'react'
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import Search from './components/Search'
import TagForm from './components/TagForm'
import TagList from './components/TagList'
import { useTypedSelector } from './hooks/useTypedSelector'
import './index.css'

const App: FC = () => {
  const notes = useTypedSelector(state => state.notes)
  const [search, setSearch] = useState('')
  const [filteredNotes, setFilteredNotes] = useState(notes)

  useEffect(() => {
    if (search === '') {
      setFilteredNotes(notes)
    } else {
      const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredNotes(filtered)
    }
  }, [search, notes])

  return (
    <div className='container'>
      <div className='column'>
        <div className='header'>
          <h2>Search notes</h2>
          <Search search={search} setSearch={setSearch} />
        </div>
        <div>
          <h2>Add note</h2>
          <NoteForm />
        </div>
        <div>
          <h2>My notes</h2>
          <NoteList search={search} filteredNotes={filteredNotes} />
        </div>
      </div>
      <div className='column'>
        <h2>Tags</h2>
        <TagForm />
        <div className='my-items'>
          <TagList />
        </div>
      </div>
    </div>
  )
}

export default App
