import ProjectService from '~/services/ProjectService'

export const namespaced = true

export function state() {
  return {
    projects: [],
    projectsTotal: 0,
    project: {},
  }
}

export const getters = {
  getProjectById: state => (id) => {
    return state.projects.find(project => project.id === id)
  },
}

export const mutations = {
  ADD_PROJECT(state, project) {
    state.projects.push(project)
  },

  SET_PROJECTS(state, projects) {
    state.projects = projects
  },

  SET_PROJECTS_TOTAL(state, projectsTotal) {
    state.projectsTotal = projectsTotal
  },

  SET_PROJECT(state, project) {
    state.project = project
  },
}

export const actions = {
  createProject({ commit, dispatch }, project) {
    return ProjectService.postProject(project)
      .then(() => {
        commit('ADD_PROJECT', project)
        const notification = {
          type: 'success',
          message: 'Your project has been created!',
        }
        dispatch('notification/add', notification, { root: true })
      })
      .catch((error) => {
        const notification = {
          type: 'error',
          message: `There was a problem creating your project: ${error.message}`,
        }
        dispatch('notification/add', notification, { root: true })
      })
  },

  fetchProjects({ commit }) {
    return ProjectService.getProjects().then((response) => {
      commit('SET_PROJECTS', response.data)
    })
  },

  fetchProject({ commit }, id) {
    return ProjectService.getProject(id).then((response) => {
      commit('SET_PROJECT', response.data)
    })
  },

  // fetchProjects({ commit, dispatch }, { perPage, page }) {
  //   ProjectService.getProjects(perPage, page)
  //     .then((response) => {
  //       commit('SET_PROJECTS_TOTAL', parseInt(response.headers['x-total-count']))
  //       commit('SET_PROJECTS', response.data)
  //     })
  //     .catch((error) => {
  //       const notification = {
  //         type: 'error',
  //         message: `There was a problem fetching projects: ${error.message}`,
  //       }
  //       dispatch('notification/add', notification, { root: true })
  //     })
  // },

  // fetchProject({ commit, getters, dispatch }, id) {
  //   const project = getters.getProjectById(id)

  //   if (project) {
  //     commit('SET_PROJECT', project)
  //   }
  //   else {
  //     ProjectService.getProject(id)
  //       .then((response) => {
  //         commit('SET_PROJECT', response.data)
  //       })
  //       .catch((error) => {
  //         const notification = {
  //           type: 'error',
  //           message: `There was a problem fetching projects: ${error.message}`,
  //         }
  //         dispatch('notification/add', notification, {
  //           root: true,
  //         })
  //       })
  //   }
  // },
}
