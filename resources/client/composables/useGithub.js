import {Octokit} from '@octokit/rest'

const octokit = new Octokit({
  // You can set auth to a personal access token string.
  auth: 'secret123',

  // Setting a user agent is required. It defaults to octokit/rest.js v1.2.3
  // where v1.2.3 is the current version of @octokit/rest,
  // but you should set it to something that identifies your app or script.
  userAgent: 'myApp v1.2.3',

  // API Previews can be enabled globally by setting the previews option.
  // They can be set per- request as well.
  previews: ['jean-grey', 'symmetra'],

  // A default time zone can be enabled by setting the timeZone option.
  timeZone: 'Europe/Amsterdam',

  // In order to use Octokit with GitHub Enterprise, set the baseUrl option.
  // baseUrl: 'https://api.github.com',

  // For custom logging,
  // pass an object with debug, info, warn and error methods as the log option.
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error,
  },

  // Custom request options can be passed as request.* options.
  // See @octokit/request options.
  request: {
    agent: undefined,
    fetch: undefined,
    timeout: 0,
  },
})

// Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
octokit.repos
  .listForOrg({
    org: 'octokit',
    type: 'public',
  })
  .then(({data}) => {
    // handle data
  })

//
octokit.activity.listReposStarredByUser({
  username,
})
