import { format } from 'date-fns'

const parseDate = (dateStr, deliminator) => {
  const sep = deliminator || '-'
  const dateArr = dateStr.split(sep)

  switch (dateStr.length) {
    case 4:
      return new Date().setFullYear(dateStr)
    case 7:
      return new Date(dateArr[0], dateArr[1])
    default:
      return Date.now()
  }
}

const formatDate = (dateStr, deliminator) => {
  const sep = deliminator || '-'
  const dateArr = dateStr.split(sep)

  let formatted

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
