export const getThumbnail = function (video, store) {
  if (video.thumbnail) {
    return video.thumbnail
  } else {
    return getCourseThumbnail(video.courseId, store)
  }
}

export const getCourseThumbnail = function (courseId, store) {
  const getCourse = store.getters['courses/get']

  const course = getCourse(courseId)
  if (course) {
    return (
      course.image_url ||
      (course.parent_id && getCourseThumbnail(course.parent_id, store)) ||
      ''
    )
  }
}
