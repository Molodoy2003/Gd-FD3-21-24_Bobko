import { FC, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { myContext } from '../i18n/LanguageContext'
import styles from './Home.module.css'
import Message from './Message'

const Home: FC = () => {
	const { lang } = useParams<{ lang: string }>()
	const navigate = useNavigate()
	const { setLanguage } = useContext(myContext)

	useEffect(() => {
		setLanguage(lang || 'en')
	}, [lang, setLanguage])

	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLang = e.target.value
		navigate(`/${newLang}/home`)
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.header}>
				<Message id='heading' />
			</h1>
			<h5 className={styles.title}>
				<Message id='title' />
			</h5>
			<p className={styles.paragraph}>
				<Message id='p1' />
			</p>
			<p className={styles.paragraph}>
				<Message id='p2' />
			</p>
			<p className={styles.paragraph}>
				<Message id='p3' />
			</p>
			<button className={styles.button}>
				<Message id='button1' />
			</button>
			<button className={styles.button}>
				<Message id='button2' />
			</button>
			<button className={styles.button}>
				<Message id='button3' />
			</button>
			<select className={styles.select} onChange={changeLanguage} value={lang}>
				<option value='en'>English</option>
				<option value='ru'>Русский</option>
				<option value='d'>Deutsch</option>
			</select>
		</div>
	)
}

export default Home
