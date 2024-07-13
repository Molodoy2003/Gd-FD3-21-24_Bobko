import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { selectNotesByTag } from '../redux/slices/notesSlice'
import { deleteTag } from '../redux/slices/tagsSlice'
import { Tag } from '../types/types.ts'
import TagModal from './TagModal'

interface TagItemProps {
  tag: Tag
}

const TagItem: React.FC<TagItemProps> = ({ tag }) => {
  const dispatch = useDispatch()
  const notes = useTypedSelector(state => selectNotesByTag(state, tag.id))
  const [isEdit, setIsEdit] = useState(false)

  const handleDelete = () => {
    if (tag.count === 0) {
      dispatch(deleteTag(tag.id))
    } else {
      alert('This tag is used')
    }
  }

  const handleEdit = () => {
    setIsEdit(true)
  }

  const handleCloseEdit = () => {
    setIsEdit(false)
  }

  return (
    <div className='tag-item'>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h4>{tag.name}</h4>
        <h4>({notes.length})</h4>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
      {isEdit && <TagModal tag={tag} onClose={handleCloseEdit} />}
    </div>
  )
}

export default TagItem
