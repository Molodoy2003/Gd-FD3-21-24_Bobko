import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { renameTag } from '../redux/slices/tagsSlice'
import { Tag } from '../types/types.ts'

interface TagModalProps {
  tag: Tag
  onClose: () => void
}

const TagModal: React.FC<TagModalProps> = ({ tag, onClose }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState(tag.name)
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
    dispatch(renameTag({ id: tag.id, name }))
    onClose()
  }

  return (
    <div className='modal'>
      <div ref={modalRef} className='modal-content'>
        <h2>Edit Tag</h2>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  )
}

export default TagModal
