import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navItem} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to='/albums'>
              Albums
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to='/users'>
              Users
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to='random-photo'>
              Random Photo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
