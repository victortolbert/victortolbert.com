import _ from 'lodash'

export const courseDecorator = function (course, store) {
  const videos = videosFor(course, store)
  const sortedVideos = _.sortBy(videos, 'published_at')

  return {
    ...course,
    videos,
    numChapters: course.chapter_ids.length,
    numVideos: videos.length,
    duration: _.sum(videos.map(v => v.duration)),
    mostRecentVideo: sortedVideos[sortedVideos.length - 1],
    published_at: sortedVideos[0] && sortedVideos[0].published_at,
  }
}

const videosFor = (course, store) => {
  const getCourse = store.getters['courses/get']
  const getVideo = store.getters['videos/get']
  const chapters = course.chapter_ids.map(cId => getCourse(cId))
  const videoIds = course.videoIds.concat(chapters.flatMap(c => c.videoIds))
  return videoIds.map(vId => getVideo(vId))
}

export const sortCourse = (course, store) => {
  const getCourse = store.getters['courses/get']
  const getVideo = store.getters['videos/get']

  if (!course) {
    return {course, sortedItems: []}
  }

  const videos =
    (course.videoIds && course.videoIds.map(v => getVideo(v))) || []
  const courses =
    (course.chapter_ids && course.chapter_ids.map(c => getCourse(c))) || []

  const allItems = videos.concat(courses)
  const sortedItems = allItems.sort((i, j) => {
    return Number(i.order) > Number(j.order) ? 1 : -1
  })
  return {...course, sortedItems}
}

export const orderValueOfLastItem = (course, store) => {
  const sortedItems = sortCourse(course, store).sortedItems
  const lastItem = sortedItems[sortedItems.length - 1]
  return Number((lastItem && lastItem.order) || 0)
}

export const percentVideosComplete = (videos, store) => {
  const isPlayed = store.getters['user/videoIsPlayed']

  const numVideos = videos.length
  const numCompletedVideos = videos.filter(v => isPlayed(v.id)).length

  return Math.floor((numCompletedVideos / numVideos) * 100)
}

export default courseDecorator
