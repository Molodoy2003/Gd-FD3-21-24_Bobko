import { FC } from 'react'
import { useParams } from 'react-router-dom'

const PostPage: FC = () => {
	const { id } = useParams()

	return (
		<div>
			<h1>Пост {id}</h1>
			<h3 style={{ marginBottom: '15px' }}>Контент поста {id}:</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque
				enim rem numquam, perspiciatis itaque <br /> ducimus quis sint repellat
				provident ipsum, similique nobis nemo. Perferendis dolor voluptas
				repellat facilis sapiente!
			</p>
		</div>
	)
}

export default PostPage
