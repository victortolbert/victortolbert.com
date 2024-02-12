import DateLanguages from './date-languages'

export default {

  /**
   * Validates a date object
   * @param {Date} date - an object instantiated with the new Date constructor
   * @return {boolean}
   */
  isValidDate(date) {
    if (Object.prototype.toString.call(date) !== '[object Date]')
      return false

    return !Number.isNaN(date.getTime())
  },

  /**
   * Return abbreviated week day name
   * @param {Date}
   * @param {Array}
   * @return {string}
   */
  getDayNameAbbr(date, days) {
    if (typeof date !== 'object')
      throw new TypeError('Invalid Type')

    return days[date.getDay()]
  },

  /**
   * Return name of the month
   * @param {number | Date}
   * @param {Array}
   * @return {string}
   */
  getMonthName(month, months) {
    if (!months)
      throw new Error('missing 2nd parameter Months array')

    if (typeof month === 'object')
      return months[month.getMonth()]

    if (typeof month === 'number')
      return months[month]

    throw new TypeError('Invalid type')
  },

  /**
   * Return an abbreviated version of the month
   * @param {number | Date}
   * @return {string}
   */
  getMonthNameAbbr(month, monthsAbbr) {
    if (!monthsAbbr)
      throw new Error('missing 2nd parameter Months array')

    if (typeof month === 'object')
      return monthsAbbr[month.getMonth()]

    if (typeof month === 'number')
      return monthsAbbr[month]

    throw new TypeError('Invalid type')
  },

  /**
   * Returns a UTC date with timezone information removed
   * @param {Date} date
   * @return {Date}
   */
  convertToUTC(date) {
    return new Date(date.getTime() + (date.getTimezoneOffset() * 60000))
  },

  /**
   * Return the number of days in the month
   * @param {number} year
   * @param {number} month - month here is equal to getMonth() i.e index based
   * @return {number}
   */
  daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
  },

  /**
   * Returns number of days between two dates
   * @param {Date} start
   * @param {Date} end
   * @return {number}
   */
  dayDiff(start, end) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())
    const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())

    return Math.floor((utc2 - utc1) / MS_PER_DAY)
  },

  /**
   * Get nth suffix for date
   * @param {number} day
   * @return {string}
   */
  getNthSuffix(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return 'st'
      case 2:
      case 22:
        return 'nd'
      case 3:
      case 23:
        return 'rd'
      default:
        return 'th'
    }
  },

  /**
   * Formats date object
   * @param {Date}
   * @param {string}
   * @param {object}
   * @return {string}
   */
  formatDate(date, format, translation) {
    translation = (!translation) ? DateLanguages.translations.en : translation
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const str = format
      .replace(/dd/, (`0${day}`).slice(-2))
      .replace(/d/, day)
      .replace(/yyyy/, year)
      .replace(/yy/, String(year).slice(2))
      .replace(/MMMM/, this.getMonthName(date.getMonth(), translation.months.original))
      .replace(/MMM/, this.getMonthNameAbbr(date.getMonth(), translation.months.abbr))
      .replace(/MM/, (`0${month}`).slice(-2))
      .replace(/M(?!a)/, month)
      .replace(/su/, this.getNthSuffix(date.getDate()))
      .replace(/D(?!e)/, this.getDayNameAbbr(date, translation.days))
    return str
  },

  /**
   * Creates an array of dates for each day in between two dates.
   * @param {Date} start
   * @param {Date} end
   * @return {Array}
   */
  createDateArray(start, end) {
    const dates = []
    while (start <= end) {
      dates.push(new Date(start))
      start = new Date(start).setDate(new Date(start).getDate() + 1)
    }
    return dates
  },

}
