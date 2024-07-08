import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { IAlbum, IUser } from '../../types/types'
import styles from './User.module.css'

const User: FC = () => {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<IUser>()
  const [albums, setAlbums] = useState<IAlbum[]>([])

  useEffect(() => {
    axios
      .get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(({ data }) => setUser(data))

    axios
      .get<IAlbum[]>(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then(({ data }) => setAlbums(data))
  }, [])

  if (!user) return <div>Loading...</div>

  return (
    <div className={styles.container}>
      <Link to='/users' className={styles.backLink}>
        ← Back
      </Link>
      <h2>Info:</h2>
      <p>
        <b>Username: </b> {user.username}
      </p>
      <p>
        <b>Name: </b> {user.name}
      </p>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Company:</b> {user.company?.name}
      </p>
      <h2>Albums:</h2>
      <div className={styles.albumsContainer}>
        {albums.map(album => (
          <div key={album.id} className={styles.albumCard}>
            <Link to={`/albums/${album.id}`}>
              <img
                src={`https://via.placeholder.com/150/92c952?text=${album.id}`}
                alt={album.title}
                className={styles.albumImage}
              />
            </Link>
            <h4 className={styles.photoTitle}>{album.title}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
