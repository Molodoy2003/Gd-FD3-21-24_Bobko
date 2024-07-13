import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { Note } from '../../types/types'

export type NotesState = Note[]

const initialState: NotesState = JSON.parse(
  localStorage.getItem('notes') || '[]'
)

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (
      state,
      action: PayloadAction<{ text: string; tagId?: string; title: string }>
    ) => {
      const newNote: Note = {
        ...action.payload,
        id: uuidv4(),
        created: new Date().toISOString(),
        updated: new Date().toISOString(),
      }
      state.push(newNote)
    },
    updateNote: (
      state,
      action: PayloadAction<{
        id: string
        text: string
        tagId?: string
        title: string
        updated: string
      }>
    ) => {
      const { id, text, tagId, title } = action.payload
      const index = state.findIndex(note => note.id === id)
      if (index !== -1) {
        state[index] = {
          ...state[index],
          text: text,
          title: title,
          tagId: tagId,
          updated: new Date().toISOString(),
        }
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      return state.filter(note => note.id !== action.payload)
    },
    searchNotes: (state, action: PayloadAction<string>) => {
      return state.filter(note => note.text.includes(action.payload))
    },
  },
})

export const selectNotesByTag = (
  state: { notes: NotesState },
  tagId: string
): Note[] => state.notes.filter(note => note.tagId === tagId)

export const { addNote, updateNote, deleteNote, searchNotes } =
  notesSlice.actions
export default notesSlice.reducer
