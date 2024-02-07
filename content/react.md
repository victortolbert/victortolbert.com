# React

:u-icon{name="i-logos-react" class="h-11 w-auto float-right pl-8 mb-16"}

React is a free and open-source front-end [JavaScript](/javascript) library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like [Next.js](/nextjs).

```jsx
import React, { useState } from 'react'
import { useQuery, useMutation } from 'tanstack/query'

const MoviesList = () => {
  const fetchMoviesQuery = useQuery('movies', async () => {
    const response = await fetch('/api/movies')
    if (!response.ok) {
      throw new Error('Failed to fetch movies')
    }
    return response.json()
  })

  const { data: movies, isLoading, isError } = fetchMoviesQuery

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching movies</div>

  return (
    <div>
      <h1>Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}

const MoviePage = () => {
  const addMovieMutation = useMutation(async (newMovie) => {
    const response = await fetch('/api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })

    if (!response.ok) {
      throw new Error('Failed to add movie')
    }

    return response.json()
  }, {
    onSuccess: () => {
      // Refetch movies after adding a new one
      queryClient.invalidateQueries('movies')
    },
  })

  const deleteMovieMutation = useMutation(async (movieId) => {
    const response = await fetch(`/api/movies/${movieId}`, {
      method: 'DELETE',
    })

    if (!response.ok) {
      throw new Error('Failed to delete movie')
    }

    return response.json()
  }, {
    onSuccess: () => {
      // Refetch movies after deleting one
      queryClient.invalidateQueries('movies')
    },
  })

  const handleAddMovie = async (newMovie) => {
    await addMovieMutation.mutateAsync(newMovie)
  }

  const handleDeleteMovie = async (movieId) => {
    await deleteMovieMutation.mutateAsync(movieId)
  }

  return (
    <div>
      <h1>Movies Page</h1>
      <AddMovieForm onAddMovie={handleAddMovie} />
      <MoviesList />
    </div>
  )
}

export default MoviePage
```
