const DATA_DOG_SITE = 'datadoghq.com'

export function state() {
  return {
    config: {
      isEnabledJS: false,
      clientTokenJS: null,
      clientLevel: null,
      clientSampleRate: 0,
    },
  }
}

export const getters = {
  isEnabled: (state) => {
    return state.config.isEnabledJS
  },
  clientToken: (state) => {
    return state.config.clientTokenJS
  },
  clientLevel: (state) => {
    return state.config.clientLevel
  },
  sampleRate: (state) => {
    return Number.parseInt(state.config.clientSampleRate)
  },
}

export const mutations = {
  SET_LOGGER(state, loggerConfig) {
    state.config = loggerConfig
  },
}

export const actions = {
  setupLogger({ commit, getters }, config) {
    commit('SET_LOGGER', config.loggerConfig)

    if (getters.isEnabled) {
      const setupApi = (serviceName, appUrl, appEnv) => {
        window.DD_LOGS.init({
          clientToken: getters.clientToken,
          site: DATA_DOG_SITE,
          service: serviceName,
          forwardErrorsToLogs: true,
          sampleRate: getters.sampleRate,
          useSecureSessionCookie: true,
        })

        window.DD_LOGS.addLoggerGlobalContext('host', appUrl)
        window.DD_LOGS.addLoggerGlobalContext('env', appEnv)
        window.DD_LOGS.logger.setLevel(getters.clientLevel)
      }

      const envConfigArray = Object.values(config.envConfig)

      if (typeof (window.DD_LOGS) === 'undefined') {
        // If datadog load takes a while to load, defer setup
        window.addEventListener('load', () => {
          setupApi(...envConfigArray)
        })
      }
      else {
        setupApi(...envConfigArray)
      }
    }
  },
}
