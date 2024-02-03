import { kebabCase } from 'scule'

const customer = {
  name: 'Carl',
  details: { age: 82 },
}
const customerCity = customer?.city ?? 'Unknown city'
console.log(customerCity)

const greet = function (name, gender) {
  return `Hello, ${gender === Symbol.for('female') ? 'Ms.' : 'Mr. '} ${name}`
}

console.log(greet('Sara', Symbol.for(' female')))
console.log(greet('Tom', Symbol.for('male')))

const stripMargin = function (texts, ...expressions) {
  const exceptLast = expressions.map((expression, index) => {
    return `${texts[index]}${expression.toString().toUpperCase()}`
  }).join('')

  const result = `${exceptLast}${texts[texts.length - 1]}`
  return result.replace(/[\n][|t|s]+(|w)/g, ' $1').trim()
}

const person = 'Jane'

const processed = stripMargin` This is for
  ${person} and it needs to be
        delivered by December 24th.`

console.log(processed)

const getDetails = function ({ name, born: { year: birthYear }, graduated: { year } }) {
  return `${name} was born in the year ${birthYear} and graduated in ${year}`
}
const details = getDetails({
  name: 'Sara',
  born: {
    month: 3,
    day: 23,
    year: 1992,
  },
  graduated: {
    month: 5,
    day: 2,
    year: 2015,
  },
})

console.log(details)

//

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

for (const [i, letter] of letters.entries()) {
  if (i % 3 === 0)
    console.log(letter)
}

//
const numbers = [1, 2, 3]
console.log('The Symbol properties in arrays are:')
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(numbers)))

//

class Message {
  constructor(text) {
    this.text = text
  }

  [Symbol.replace](word, substitute) {
    return this.text.replace(word, substitute)
  }
}

const message = new Message('There are no stupid questions.')
console.log('stupid'.replace(message, 's*****'))
console.log(''.replace(message, 'Yes, '))

//

const fibonocciSeries = function* () {
  let current = 1
  let next = 1

  yield * [current, next]

  while (true) {
    const temp = current
    current = next
    next = next + temp
    yield next
  }
}

for (const num of fibonocciSeries()) {
  if (num > 100)
    break
  console.log(num)
}

for (const value of fibonocciSeries()) {
  if (value > 25)
    break
  // process.stdout.write(value + ', ')
  console.log(value)
}

const skills = [
  {
    name: 'Backend',
    level: 'Senior',
    keywords: [
      'C#',
      '.NET',
      'ASP.NET Core',
      'PHP',
      'WordPress',
      'Laravel',
      'Drupal',
      'Node.js',
      'Express.js',
      'Ruby',
      'SQL Server',
      'PostgreSQL',
      'MySQL',
    ],
  },
  {
    name: 'Frontend',
    level: 'Senior',
    keywords: [
      'Responsive Design',
      'Progressive Web Apps',
      'Web Accessibility',
      'Web Components',
      'SEO',
      'HTML',
      'JSX',
      'CSS',
      'SCSS',
      'BEM',
      'Bootstrap',
      'Bulma',
      'Tailwind',
      'Styled Components',
      'JavaScript',
      'jQuery',
      'TypeScript',
      'Vue.js',
      'Vuex',
      'Pinia',
      'Nuxt',
      'React',
      'Next.js',
      'AngularJS',
      'Angular',
    ],
  },

  {
    name: 'DevOps',
    level: 'Intermediate',
    keywords: [
      'Heroku',
      'Microsoft Azure',
      'AWS',
      'Google Cloud',
    ],
  },
]


// Input
// [
//   {
//     name: 'DevOps',
//     level: 'Intermediate',
//     keywords: [
//       'Heroku',
//       'Microsoft Azure',
//       'AWS',
//       'Google Cloud',
//     ],
//   },
// ]
// Desired output
// [
//   {
//     name: 'DevOps',
//     level: 'Intermediate',
//     keywords: [
//       { name: 'Heroku', url: '/heroku' }
//       { name: 'Microsoft Azure', url: '/microsoft-azure' }
//       { name: 'AWS', url: '/aws' }
//       { name: 'Google Cloud', url: '/google-cloud' }
//     ],
//   },
// ]
// Given the above array of skills, modify the array of keyword strings into
// an array of objects, giving the original keyword string a property
// 'name', and adding a 'url' property, computing it's value as a kebab cased
// version of the keyword name, prepended with a '/'.
// create a list of all the keywords

const skillsMap = skills.map(skill => {
  return {
    name: skill.name,
    level: skill.level,
    keywords: skill.keywords.map(keyword => {
      return {
        name: keyword,
        url: `/${kebabCase(keyword)}`,
      }
    }),
  }
})

// I'd like a variation of the above, where the keywords when the keyword
// is contained in a special array, kebabCaseExceptions, the url is provided by a mapping in
// the special array. the special array look like this:
// const kebabCaseExceptions = [
//  { name: 'C#', url: '/c-sharp' },
//  { name: '.NET', url: '/dotnet' },
//  { name: 'JavaScript', url: '/javascript' },
//  { name: 'TypeScript', url: '/typescript' },
//  { name: 'WordPress', url: '/wordpress' },
// ]
const newSkillsMap = skills.map(skill => {




console.log(skillsMap)


// const keywords = skills.map(skill => skill.keywords)

// Create a list of all the keywords in a combined single array
// const keywords = skills.reduce((acc, skill) => {
//   return acc.concat(skill.keywords)
// }, [])

// Create a list of all the keywords in a combined single array using flatMap
const keywords = skills.flatMap(skill => skill.keywords)
console.log(keywords)

const keywordList = skills.flatMap(skill => skill.keywords)
console.log(keywordList)

const skillLinks = skills.map((skill) => {
  return {
    // name: skill.name,
    // level: skill.level,
    links: skill.keywords.map(keyword => kebabCase(keyword)),
    // url: kebabCase(skill.name),
  }
})

console.log(skillLinks)


