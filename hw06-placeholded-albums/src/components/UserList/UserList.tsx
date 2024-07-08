import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IUser } from '../../types/types'
import styles from './UserList.module.css'

const UserList: FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => setUsers(data))
  }, [])

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {users.map(user => (
          <li key={user.id} className={styles.listItem}>
            <Link to={`/users/${user.id}`} className={styles.link}>
              {user.id}. {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
