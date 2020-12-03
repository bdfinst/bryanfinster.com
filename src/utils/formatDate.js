import { format } from 'date-fns'

const parseDate = (dateStr, deliminator) => {
  const sep = deliminator || '-'
  const dateArr = dateStr.split(sep)

  let date
  switch (dateStr.length) {
    case 4:
      date = new Date().setFullYear(dateStr)
      break
    case 7:
      date = new Date(dateArr[0], dateArr[1])
      break
    default:
      date = Date.now()

      return date
  }
}

const formatDate = (dateStr, deliminator) => {
  const sep = deliminator || '-'
  const dateArr = dateStr.split(sep)

  let formatted = ''

  switch (dateStr.length) {
    case 4:
      formatted = dateStr
      break
    case 7:
      formatted = format(new Date(dateArr[0], dateArr[1]), 'MMM, yyyy')
      break
    default:
      formatted = ''
  }

  return formatted
}

export { formatDate, parseDate }
