import { FC } from 'react'
import UserList from '../components/UserList/UserList'

const UsersPage: FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Users</h1>
      <UserList />
    </div>
  )
}

export default UsersPage
