import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IAlbum, IPhoto } from '../../types/types'
import styles from './Album.module.css'

const Album: FC = () => {
  const { id } = useParams<{ id: string }>()
  const [album, setAlbum] = useState<IAlbum>()
  const [photos, setPhotos] = useState<IPhoto[]>([])

  useEffect(() => {
    axios
      .get<IAlbum>(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(({ data }) => setAlbum(data))

    axios
      .get<IPhoto[]>(
        `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
      )
      .then(({ data }) => setPhotos(data))
  }, [])

  if (!album) return <div>Loading...</div>

  return (
    <div className='container'>
      <Link to='/albums' className={styles.backLink}>
        ← Back
      </Link>
      <h2>Album name: {album.title}</h2>
      <Link to={`/users/${album.userId}`} className={styles.authorLink}>
        (open author page)
      </Link>
      <div className={styles.photosContainer}>
        {photos.map(photo => (
          <div key={photo.id} className={styles.photoCard}>
            <Link to={photo.url}>
              <img
                src={photo.thumbnailUrl}
                alt={photo.title}
                className={styles.photoImage}
              />
            </Link>
            <h4 className={styles.photoTitle}>{photo.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Album
