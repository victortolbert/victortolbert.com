export const parseTimestamp = (timestamp, format = '') => {
  if (!timestamp) return

  const date = timestamp.seconds
    ? new Date(timestamp.seconds * 1000)
    : timestamp

  if (format === 'HH:mm') {
    return `${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}`
  } else if (format === 'DD MMMM YYYY') {
    const options = {month: 'long', year: 'numeric', day: 'numeric'}
    return `${new Intl.DateTimeFormat('en-GB', options).format(date)}`
  } else if (format === 'DD/MM/YY') {
    const options = {month: 'numeric', year: 'numeric', day: 'numeric'}
    return `${new Intl.DateTimeFormat('en-GB', options).format(date)}`
  } else if (format === 'DD MMMM, HH:mm') {
    const options = {month: 'long', day: 'numeric'}
    return `${new Intl.DateTimeFormat('en-GB', options).format(
      date,
    )}, ${zeroPad(date.getHours(), 2)}:${zeroPad(date.getMinutes(), 2)}`
  }

  return date
}

const zeroPad = (num, pad) => {
  return String(num).padStart(pad, '0')
}

export const isSameDay = (d1, d2) => {
  return (
    d1.getFullYear() === d2.getFullYear() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getDate() === d2.getDate()
  )
}

export const currency = amount => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formatter.format(amount).replace(/\D00(?=\D*$)/, '')
}

export const capitalize = str => {
  if (typeof str !== 'string') return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const pluralize = (number, singularWord) => {
  const text = `${number} ${singularWord}`
  if (number === 1) return text
  return text + 's'
}

export const formatDate = value => {
  const date = new Date(value)
  return date.toLocaleString(['en-US'], {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
}

export const shortDate = dateStr => {
  const date = new Date(dateStr)
  return date.toLocaleDateString(undefined, {month: 'long', year: 'numeric'})
}

let UUID = 0
export function UniqueID() {
  const getID = () => {
    UUID++
    return UUID
  }

  return {
    getID,
  }
}

export const sortAndGroup = async () => {
  const sortedData = data.sort()

  const reducedData = sortedData.reduce((items, dataElement) => {
    if (!items.find(item => item.header === dataElement.charAt(0))) {
      items.push({header: dataElement.charAt(0)})
    }
    items.push({name: dataElement})
    return items
  }, [])
  return reducedData.map(item => item.header || item.name)
}

// sortAndGroup().then(result => console.log(result));

export const binned = wordsArray =>
  wordsArray.reduce((result, word) => {
    // get the first letter. (this assumes no empty words in the list)
    const letter = word[0]

    // ensure the result has an entry for this letter
    result[letter] = result[letter] || []

    // add the word to the letter index
    result[letter].push(word)

    // return the updated result
    return result
  }, {})

// export const groupByAlphabet = (data, field = 'lastName') => {
//   data.sort((a, b) => a[field].localeCompare(b[field], 'en', { sensitivity: 'base' }))

//   return data.reduce((acc, cur) => {

//     // get first letter of name of current element
//     let alphabet = cur[field][0];

//     // if there is no property in accumulator with this letter create it
//     if (!acc[alphabet]) acc[alphabet] = { alphabet, record: [cur] }

//     // if there is push current element to children array for that letter
//     else acc[alphabet].record.push(cur);

//     // return accumulator
//     return acc;
//   }, {})
// };

// let result = Object.values(data)
// console.log(result)

export async function init({app, store, error, isClient}) {
  if (isClient) return

  try {
    const messages = await app.$axios.$get(
      `${process.env.VUE_APP_API_URL}/messages`,
    )
    store.commit('INIT', messages)
  } catch (err) {
    store.commit('INIT', [])
    error({statusCode: 500, message: 'Oops, try again'})
  }
}

export const strip = html => html.replace(/<[^>]*>/g, '')

export const truncate = str => `${strip(str).substr(0, 50)}...`

export const flattened = arr => [].concat(...arr)

export const formatCurrency = amount => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
  return formatter.format(amount).replace(/\D00(?=\D*$)/, '')
}

export const toTitleCase = str => {
  const smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i
  const alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/
  const wordSeparators = /([ :–—-])/

  return str
    .split(wordSeparators)
    .map(function (current, index, array) {
      if (
        /* Check for small words */
        current.search(smallWords) > -1 &&
        /* Skip first and last word */
        index !== 0 &&
        index !== array.length - 1 &&
        /* Ignore title end and subtitle start */
        array[index - 3] !== ':' &&
        array[index + 1] !== ':' &&
        /* Ignore small words that start a hyphenated phrase */
        (array[index + 1] !== '-' ||
          (array[index - 1] === '-' && array[index + 1] === '-'))
      ) {
        return current.toLowerCase()
      }

      /* Ignore intentional capitalization */
      if (current.substr(1).search(/[A-Z]|\../) > -1) {
        return current
      }

      /* Ignore URLs */
      if (array[index + 1] === ':' && array[index + 2] !== '') {
        return current
      }

      /* Capitalize the first letter */
      return current.replace(alphanumericPattern, function (match) {
        return match.toUpperCase()
      })
    })
    .join('')
}

export const getEventIndexById = (state, eventId) =>
  state.events.findIndex(event => event.id.toString() === eventId.toString())

export const Status = {
  NOT_ENROLLED: 'Ready',
  ACTIVE: 'Emailed',
  PLEDGED: 'Pledged',
  UNSUBSCRIBED: 'Unsubscribed',
}

export const PledgingStatus = {
  NOT_ENROLLED: 'Ready',
  ACTIVE: 'Emailed',
  PLEDGED: 'Pledged',
  UNSUBSCRIBED: 'Unsubscribed',
}

let count = 0

const responses = [
  {
    company: {name: `Microsoft`},
    email: `john@microsoft.com`,
    name: `John Smith`,
    website: `https://microsoft.com/john`,
  },
  {
    company: {name: `Apple`},
    email: `john@apple.com`,
    name: `John Smith`,
    website: `https://apple.com/john`,
  },
  {
    company: {name: `Amazon`},
    email: `john@amazon.com`,
    name: `John Smith`,
    website: `https://amazon.com/john`,
  },
]

export const asArray = x => [].concat(x)

export const fetcher = endpoint =>
  new Promise(resolve => {
    console.log(`Fetch: ${endpoint}`)
    setTimeout(() => {
      console.log(`Respond:`, responses[count])
      resolve(responses[count])
      if (count === 2) {
        count = 0
        return
      }
      count += 1
    }, 2000)
  })
