import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const generatePostsId = () => {
	const posts = []
	for (let i = 1; i <= 20; i++) {
		posts.push(i)
	}
	return posts
}

const Posts: FC = () => {
	const [posts, setPosts] = useState<number[]>([])

	useEffect(() => {
		const savedPostsId = sessionStorage.getItem('postsId')
		if (savedPostsId) {
			setPosts(JSON.parse(savedPostsId))
		} else {
			const newPostsId = generatePostsId()
			setPosts(newPostsId)
			sessionStorage.setItem('postsId', JSON.stringify(newPostsId))
		}
	}, [])

	return (
		<div>
			<h1>Список постов</h1>
			<ul style={{ listStyle: 'none' }}>
				{posts.map(id => (
					<li key={id}>
						<Link className='post-hover' to={`/post/${id}`}>
							Пост {id}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Posts
