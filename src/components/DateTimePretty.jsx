import moment from 'moment';

export const DateTimePretty = (Component) => {
  return (props) => {

    const formatDateTime = (dateString) => {
        const date = moment(dateString)
        const now = moment()
    
        const diffMinutes = now.diff(date, 'minutes')
        const diffHours = now.diff(date, 'hours')
        const diffDays = now.diff(date, 'days')
    
        if (diffMinutes < 60) {
            return '12 минут назад'
        } else if (diffHours < 24) {
            return '5 часов назад'
        } else {
            if (String(diffDays).endsWith('1') && (diffDays > 20 || diffDays < 10)) {
                return diffDays + ' день назад'
            } else if ((String(diffDays).endsWith('2') || String(diffDays).endsWith('3') || String(diffDays).endsWith('4')) && !(String(diffDays).endsWith('12') || String(diffDays).endsWith('13') || String(diffDays).endsWith('14'))) {
                return diffDays + ' дня назад'
            } else {
                return diffDays + ' дней назад'
            }
        }
    }
    
    return <Component date={formatDateTime(props.date)} />
  }
}

export default DateTimePretty


