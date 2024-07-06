import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { deleteNote } from '../redux/slices/notesSlice'
import { decrementTagCount } from '../redux/slices/tagsSlice'
import { Note } from '../types/types.ts'
import formatDate from '../utils/FormatDate.ts'
import NoteModal from './NoteModal'

interface NoteItemProps {
  note: Note
}

const NoteItem: FC<NoteItemProps> = ({ note }) => {
  const dispatch = useDispatch()
  const tags = useTypedSelector(state => state.tags)
  const [isEdit, setIsEdit] = useState<boolean>(false)

  const tagName = note.tagId
    ? tags.find(tag => tag.id === note.tagId)?.name
    : 'No tag'

  const handleDelete = () => {
    if (note.tagId) {
      dispatch(decrementTagCount(note.tagId))
    }
    dispatch(deleteNote(note.id))
  }

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleCloseEdit = () => {
    setIsEdit(false)
  }

  return (
    <div className='note-item'>
      <h3>{note.title}</h3>
      <p style={{ fontWeight: 'bold' }}>{tagName}</p>
      <p>{note.text}</p>
      <p>{formatDate(note.updated)}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      {isEdit && <NoteModal note={note} onClose={handleCloseEdit} />}
    </div>
  )
}

export default NoteItem
