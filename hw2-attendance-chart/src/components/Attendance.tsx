import { FC, useEffect, useState } from 'react'
import './Attendance.css'

const ATTENDANCE = 'attendance'
const STUDENTS = 'students'
const DATES = 'dates'

type TypeAttendance = {
	attendance: {
		[student: string]: {
			[date: string]: boolean
		}
	}
	setAttendance: React.Dispatch<
		React.SetStateAction<{
			[student: string]: {
				[date: string]: boolean
			}
		}>
	>
}

type TypeChangeAttendance = {
	student: string
	date: string
}

const initialStudents: string[] = ['Danik', 'Egor', 'Vika', 'Max', 'Anya']
const initialDates: string[] = [
	'2024-06-01',
	'2024-06-02',
	'2024-06-03',
	'2024-06-04',
	'2024-06-05',
]

const Attendance: FC<TypeAttendance> = ({ attendance, setAttendance }) => {
	const [students, setStudents] = useState<string[]>(initialStudents)
	const [dates, setDates] = useState<string[]>(initialDates)
	const [isSaving, setIsSaving] = useState<boolean>(false)

	useEffect(() => {
		const savedStudents = localStorage.getItem(STUDENTS)
		const savedDates = localStorage.getItem(DATES)

		if (savedStudents) {
			setStudents(JSON.parse(savedStudents))
		}
		if (savedDates) {
			setDates(JSON.parse(savedDates))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem(STUDENTS, JSON.stringify(students))
	}, [students])

	useEffect(() => {
		localStorage.setItem(DATES, JSON.stringify(dates))
	}, [dates])

	const changeAttendance = ({ student, date }: TypeChangeAttendance) => {
		const newAttendance = { ...attendance }

		if (!newAttendance[student]) {
			newAttendance[student] = {}
		}

		newAttendance[student][date] = !newAttendance[student][date]
		setAttendance(newAttendance)
	}

	const addStudent = () => {
		const newStudent = prompt('Введите имя студента: ')
		if (newStudent) {
			setStudents([...students, newStudent])
		}
	}

	const addDate = () => {
		const newDate = prompt('Введите дату :')
		if (newDate) {
			setDates([...dates, newDate])
		}
	}

	const saveAttendance = () => {
		setIsSaving(true)
		try {
			localStorage.setItem(ATTENDANCE, JSON.stringify(attendance))
		} catch (e) {
			console.log(e)
		}
		setTimeout(() => {
			setIsSaving(false)
		}, 2000)
	}

	return (
		<div>
			<button onClick={addStudent}>Добавить студента</button>
			<button onClick={addDate}>Добавить дату</button>
			<div className='table'>
				<div className='row header'>
					<div className='cell number'>№</div>
					<div className='cell name'>Имя</div>
					{dates.map((date, id) => (
						<div key={id} className='cell date'>
							{date}
						</div>
					))}
				</div>
				{students.map((student, id) => (
					<div key={id} className='row'>
						<div className='cell'>{id + 1}</div>
						<div className='cell'>{student}</div>
						{dates.map((date, id) => (
							<div
								key={id}
								className='cell'
								onClick={() => changeAttendance({ student, date })}
								style={{
									cursor: 'pointer',
									backgroundColor:
										attendance[student] && attendance[student][date]
											? '#2d9244'
											: '#242424',
								}}
							>
								{attendance[student] && attendance[student][date]
									? 'Присутствует'
									: 'Отсутствует'}
							</div>
						))}
					</div>
				))}
			</div>
			<button onClick={saveAttendance} disabled={isSaving}>
				{isSaving ? 'Сохранение...' : 'Сохранить'}
			</button>
		</div>
	)
}

export default Attendance
