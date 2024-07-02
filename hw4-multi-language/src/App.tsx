import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LanguageContext from './i18n/LanguageContext'

function App() {
	return (
		<LanguageContext>
			<BrowserRouter>
				<Routes>
					<Route path='/:lang/home' element={<Home />} />
					<Route path='/' element={<Navigate to='/en/home' />} />
				</Routes>
			</BrowserRouter>
		</LanguageContext>
	)
}

export default App
