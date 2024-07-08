import { FC } from 'react'
import AlbumList from '../components/AlbumList/AlbumList'

const AlbumsPage: FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Albums</h1>
      <AlbumList />
    </div>
  )
}

export default AlbumsPage
