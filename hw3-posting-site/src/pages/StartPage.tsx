import { FC } from 'react'
import { Link } from 'react-router-dom'

const StartPage: FC = () => {
	return (
		<div>
			<h1>Добро пожаловать!</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, quae
				eveniet. Alias magni expedita eligendi, odit nulla sint fuga natus earum
				placeat accusamus unde quia eveniet a exercitationem voluptate nisi.
			</p>
			<Link to='/post/1'>Посмотреть пост</Link>
		</div>
	)
}

export default StartPage
