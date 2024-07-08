import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import RandomPhoto from './components/RandomPhoto/RandomPhoto'
import AlbumPage from './pages/AlbumPage'
import AlbumsPage from './pages/AlbumsPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import UsersPage from './pages/UsersPage'

const App: FC = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/albums' element={<AlbumsPage />} />
        <Route path='/albums/:id' element={<AlbumPage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/random-photo' element={<RandomPhoto />} />
      </Routes>
    </div>
  )
}

export default App
