import { FC, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { updateNote } from '../redux/slices/notesSlice'
import { Note } from '../types/types.ts'

interface NoteModalProps {
  note: Note
  onClose: () => void
}

const NoteModal: FC<NoteModalProps> = ({ note, onClose }) => {
  const dispatch = useDispatch()
  const tags = useTypedSelector(state => state.tags)

  const [title, setTitle] = useState<string>(note.title)
  const [text, setText] = useState<string>(note.text)
  const [tagId, setTagId] = useState<string>(note.tagId || '')
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  const handleSave = () => {
    dispatch(
      updateNote({
        ...note,
        title: title,
        text: text,
        tagId: tagId,
        updated: new Date().toISOString(),
      })
    )
    onClose()
  }

  return (
    <div className='modal'>
      <div ref={modalRef} className='modal-content'>
        <h2>Edit Note</h2>
        <label>Title</label>
        <input
          value={title}
          placeholder='Title'
          onChange={e => setTitle(e.target.value)}
        />
        <label>Text</label>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Text'
        />
        <label>Tag</label>
        <select value={tagId} onChange={e => setTagId(e.target.value)}>
          <option value=''>No tag</option>
          {tags.map(tag => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default NoteModal
