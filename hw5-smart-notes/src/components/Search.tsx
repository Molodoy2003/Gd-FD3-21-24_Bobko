import { FC, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchNotes } from '../redux/slices/notesSlice'

interface SearchProps {
  search: string
  setSearch: (search: string) => void
}

const Search: FC<SearchProps> = ({ search, setSearch }) => {
  const [keyword, setKeyword] = useState<string>('')
  const dispatch = useDispatch()

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(searchNotes(keyword))
  }

  return (
    <form className='search-form' onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Search notes...'
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
    </form>
  )
}

export default Search
