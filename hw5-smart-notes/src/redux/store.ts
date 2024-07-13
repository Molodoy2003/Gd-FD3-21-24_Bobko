import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './slices/notesSlice'
import tagsReducer from './slices/tagsSlice'

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    tags: tagsReducer,
  },
})

store.subscribe(() => {
  localStorage.setItem('notes', JSON.stringify(store.getState().notes))
  localStorage.setItem('tags', JSON.stringify(store.getState().tags))
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
