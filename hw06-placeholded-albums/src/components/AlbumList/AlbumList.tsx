import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IAlbum } from '../../types/types'
import styles from './AlbumList.module.css'

const AlbumList: FC = () => {
  const [albums, setAlbums] = useState<IAlbum[]>([])

  useEffect(() => {
    axios
      .get<IAlbum[]>('https://jsonplaceholder.typicode.com/albums')
      .then(({ data }) => setAlbums(data))
  }, [])

  return (
    <div className={styles.container}>
      {albums.map(album => (
        <div key={album.id} className={styles.card}>
          <Link to={`/albums/${album.id}`}>
            <img
              className={styles.image}
              src={`https://via.placeholder.com/150/1ee8a4?text=${album.id}`}
              alt={album.title}
            />
          </Link>
          <h3 className={styles.photoTitle}>{album.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default AlbumList
