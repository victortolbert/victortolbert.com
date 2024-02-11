// 0 = sunday
// 1 = monday
const WEEK_START = 1

// Returns an array of first days of all months in a year
export function monthsInYear() {
  return Array.from({ length: 12 }).fill(this.year).map((y, m) => new Date(y, m, 1, 2))
}

export function getDay(month) {
  return (month.getDay() + WEEK_START) % 7
}

// indicative day of year
// https://jsperf.com/day-of-year-id
export function dayOfYear(date) {
  return (date.getYear() << 9) + (date.getMonth() << 5) + date.getDate()
}

export function weeksInMonth(month) {
  const firstOfWeek = new Date(month.getFullYear(), month.getMonth(), month.getDate() - getDay(month))
  const lastOfMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0)

  const weeks = []
  let week
  for (week = new Date(month); week < lastOfMonth; week.setDate(week.getDate() + 7))
    weeks.push(new Date(week))

  if (getDay(weeks[weeks.length - 1]) > getDay(lastOfMonth))
    weeks.push(new Date(week))

  return weeks
}

export function daysInweek(week) {
  const day = new Date(week)
  const days = []
  for (let i = 0; i < 7; i++) {
    day.setDate(day.getDate() - getDay(day) + i)
    days.push(new Date(day))
  }
  return days
}

export function weekNumber(w) {
  const thursday = new Date(w.getFullYear(), w.getMonth(), w.getDate() - getDay(w) + 3)
  const firstOfYear = new Date(thursday.getFullYear(), 0, 1)
  return Math.ceil((((thursday - firstOfYear) / 86400000) + getDay(firstOfYear) + 1) / 7)
}
