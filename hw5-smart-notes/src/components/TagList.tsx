import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { Tag } from '../types/types.ts'
import TagItem from './TagItem'

const TagList: React.FC = () => {
  const tags: Tag[] = useTypedSelector(state => state.tags)

  return (
    <>
      {tags.map(tag => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </>
  )
}

export default TagList
