import { defaults, mande } from 'mande'
import type { Joke } from '~/types'

export const jokes = mande('https://v2.jokeapi.dev/joke/Any?type=twopart')
// jokes.options.a

delete defaults.headers['Content-Type']

export function useRandomJoke() {
  return jokes.get<Joke>('/jokes/random')
}
