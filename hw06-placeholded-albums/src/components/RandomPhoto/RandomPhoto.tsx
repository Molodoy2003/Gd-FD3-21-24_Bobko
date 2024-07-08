import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IAlbum, IRandomPhoto, IUser } from '../../types/types'
import styles from './RandomPhoto.module.css'

const randomValue = (min: number, max: number): number => {
  return min + Math.floor(Math.random() * (max - min + 1))
}

const randomPhotosFunc = (
  photos: IRandomPhoto[],
  count: number
): IRandomPhoto[] => {
  return photos
    .map(photo => ({ photo, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ photo }) => photo)
    .slice(0, count)
}

const RandomPhoto: React.FC = () => {
  const [photo, setPhoto] = useState<IRandomPhoto>()
  const [album, setAlbum] = useState<IAlbum>()
  const [user, setUser] = useState<IUser>()
  const [randomPhotos, setRandomPhotos] = useState<IRandomPhoto[]>([])

  useEffect(() => {
    const fetchRandomPhoto = async () => {
      try {
        const photoId = randomValue(1, 5000)
        const photoInfo = await axios.get<IRandomPhoto>(
          `https://jsonplaceholder.typicode.com/photos/${photoId}`
        )
        const randomPhoto = photoInfo.data
        setPhoto(randomPhoto)

        const albumInfo = await axios.get<IAlbum>(
          `https://jsonplaceholder.typicode.com/albums/${randomPhoto.albumId}`
        )
        setAlbum(albumInfo.data)

        const userInfo = await axios.get<IUser>(
          `https://jsonplaceholder.typicode.com/users/${albumInfo.data.userId}`
        )
        setUser(userInfo.data)

        const photosInfo = await axios.get<IRandomPhoto[]>(
          `https://jsonplaceholder.typicode.com/photos?albumId=${randomPhoto.albumId}`
        )
        setRandomPhotos(randomPhotosFunc(photosInfo.data, 6))
      } catch (e) {
        console.log(e)
      }
    }

    fetchRandomPhoto()
  }, [])

  if (!photo || !album || !user) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Link to='/' className={styles.backLink}>
        ← Home
      </Link>
      <h2>
        <u>Photo name:</u> {photo.title}
      </h2>
      <img src={photo.url} alt={photo.title} className={styles.photoImage} />
      <div className={styles.albumInfo}>
        <h3>
          <u>Album:</u> {album.title}
        </h3>
        <h3>
          <u>Author: </u>
          {user.name}
        </h3>
      </div>
      <div className={styles.randomPhotosContainer}>
        <h2>6 Random album photos: </h2>
        <div className={styles.photosGrid}>
          {randomPhotos.map(photo => (
            <div key={photo.id} className={styles.photoCard}>
              <a>
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className={styles.photoImage}
                />
              </a>
              <h4>{photo.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RandomPhoto
