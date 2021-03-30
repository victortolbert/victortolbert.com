import courses from '~/__mocks__/fixtures/courses.json'

export const fetchCourses = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(courses)
    }, 500)
  })

export const fetchCourseById = (id: number) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(courses.find(course => course.id === id))
    }, 250)
  })
