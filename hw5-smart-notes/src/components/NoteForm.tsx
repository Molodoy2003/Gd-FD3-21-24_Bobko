import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { addNote, updateNote } from '../redux/slices/notesSlice'
import { decrementTagCount, incrementTagCount } from '../redux/slices/tagsSlice'
import { Note, Tag } from '../types/types.ts'

interface NoteFormProps {
  existingNote?: Note | null
}

const NoteForm: React.FC<NoteFormProps> = ({ existingNote = null }) => {
  const [title, setTitle] = useState(existingNote ? existingNote.title : '')
  const [text, setText] = useState(existingNote ? existingNote.text : '')
  const [tagId, setTagId] = useState(existingNote ? existingNote.tagId : '')
  const tags: Tag[] = useTypedSelector(state => state.tags)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (existingNote) {
      if (existingNote.tagId !== tagId) {
        dispatch(decrementTagCount(existingNote.tagId || ''))
        dispatch(incrementTagCount(tagId || ''))
      }
      dispatch(
        updateNote({
          ...existingNote,
          title,
          text,
          tagId,
        })
      )
    } else {
      dispatch(
        addNote({
          title,
          text,
          tagId,
        })
      )
      dispatch(incrementTagCount(tagId || ''))
    }
    setTitle('')
    setText('')
    setTagId('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Title...'
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder='Text...'
        value={text}
        onChange={e => setText(e.target.value)}
        required
      />
      <select value={tagId} onChange={e => setTagId(e.target.value)}>
        <option value=''>No tag</option>
        {tags.map(tag => (
          <option key={tag.id} value={tag.id}>
            {tag.name}
          </option>
        ))}
      </select>
      <button type='submit'>Add Note</button>
    </form>
  )
}

export default NoteForm
