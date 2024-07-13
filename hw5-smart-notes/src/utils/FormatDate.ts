import { format } from 'date-fns'

const formatDate = (dateString: string | number | Date) => {
  return format(new Date(dateString), 'dd MMM yyyy, HH:mm')
}

export default formatDate
