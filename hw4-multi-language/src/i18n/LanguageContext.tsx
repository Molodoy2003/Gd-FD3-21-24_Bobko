import { FC, ReactNode, createContext, useState } from 'react'
import d from './d'
import en from './en'
import ru from './ru'

export interface IContext {
	language: string
	setLanguage: (lang: string) => void
	translations: Record<string, string>
}

export const myContext = createContext<IContext>({
	language: 'en',
	setLanguage: () => {},
	translations: en,
})

const LanguageContext: FC<{ children: ReactNode }> = ({ children }) => {
	const [language, setLanguage] = useState<string>('en')

	const translations =
		{
			en,
			ru,
			d,
		}[language] || en

	return (
		<myContext.Provider value={{ language, setLanguage, translations }}>
			{children}
		</myContext.Provider>
	)
}

export default LanguageContext
