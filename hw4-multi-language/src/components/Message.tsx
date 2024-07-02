import { FC, useContext } from 'react'
import { myContext } from '../i18n/LanguageContext'

export interface IMessage {
	id: string
}

const Message: FC<IMessage> = ({ id }) => {
	const { translations } = useContext(myContext)

	return <>{translations[id] || id}</>
}

export default Message
