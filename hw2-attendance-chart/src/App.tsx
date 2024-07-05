import { FC, useEffect, useState } from 'react'
import Attendance from './components/Attendance'

const ATTENDANCE = 'attendance'

type TypeAttendance = {
	[student: string]: {
		[date: string]: boolean
	}
}

const App: FC = () => {
	const [attendance, setAttendance] = useState<TypeAttendance>({})

	useEffect(() => {
		try {
			const lastAttendance = localStorage.getItem(ATTENDANCE)
			if (lastAttendance) {
				setAttendance(JSON.parse(lastAttendance) as TypeAttendance)
			}
		} catch (e) {
			console.log(e)
		}
	}, [])

	return (
		<div>
			<h1>Таблица посещаемости студентов</h1>
			<Attendance attendance={attendance} setAttendance={setAttendance} />
		</div>
	)
}

export default App
