import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { Tag } from '../../types/types'

export type TagsState = Tag[]

const initialState: TagsState = JSON.parse(localStorage.getItem('tags') || '[]')

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<string>) => {
      const newTag: Tag = {
        id: uuidv4(),
        name: action.payload,
        count: 0,
      }
      state.push(newTag)
    },
    updateTag: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const tag = state.find(tag => tag.id === action.payload.id)
      if (tag) {
        tag.name = action.payload.name
      }
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      return state.filter(tag => tag.id !== action.payload)
    },
    renameTag: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const tag = state.find(tag => tag.id === action.payload.id)
      if (tag) {
        tag.name = action.payload.name
      }
    },
    incrementTagCount: (state, action: PayloadAction<string>) => {
      const tag = state.find(tag => tag.id === action.payload)
      if (tag) {
        tag.count += 1
      }
    },
    decrementTagCount: (state, action: PayloadAction<string>) => {
      const tag = state.find(tag => tag.id === action.payload)
      if (tag) {
        tag.count -= 1
      }
    },
  },
})

export const {
  addTag,
  updateTag,
  renameTag,
  deleteTag,
  incrementTagCount,
  decrementTagCount,
} = tagsSlice.actions
export default tagsSlice.reducer
