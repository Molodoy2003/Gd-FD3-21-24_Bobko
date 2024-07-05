import { FC } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Content from './components/Content'
import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import NotFound from './pages/NotFound.tsx'
import PostPage from './pages/PostPage'
import PostsPage from './pages/PostsPage'
import StartPage from './pages/StartPage'
import TermsPage from './pages/TermsPage'

const App: FC = () => (
	<Router>
		<div className='wrapper'>
			<Header />
			<Content>
				<Routes>
					<Route path='/' element={<StartPage />} />
					<Route path='/start' element={<StartPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/terms' element={<TermsPage />} />
					<Route path='/posts' element={<PostsPage />} />
					<Route path='/post/:id' element={<PostPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Content>
			{/* <Footer /> */}
		</div>
	</Router>
)

export default App
