import { IoLogoTux } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<Link to='/start'>
						<IoLogoTux color='black' size={45} />
					</Link>
					<li>
						<Link to='/start'>Главная</Link>
					</li>

					<li>
						<Link to='/about'>О сайте</Link>
					</li>
					<li>
						<Link to='/terms'>Условия</Link>
					</li>
					<li>
						<Link to='/posts'>Посты</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
