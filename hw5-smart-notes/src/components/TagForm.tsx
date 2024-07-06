import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTag, updateTag } from '../redux/slices/tagsSlice'
import { Tag } from '../types/types.ts'

interface TagFormProps {
  existingTag?: Tag | null
}

const TagForm: React.FC<TagFormProps> = ({ existingTag = null }) => {
  const [name, setName] = useState(existingTag ? existingTag.name : '')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (existingTag) {
      dispatch(
        updateTag({
          id: existingTag.id,
          name,
        })
      )
    } else {
      dispatch(addTag(name))
    }
    setName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Tag name...'
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <button type='submit'>Add Tag</button>
    </form>
  )
}

export default TagForm
