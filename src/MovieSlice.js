import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";

// Helper function to load state from localStorage
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('movies');
    if (serializedState === null) {
      return []; // If no data exists, return an empty array
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn("Could not load movies from localStorage", e);
    return [];
  }
};

// Helper function to save state to localStorage
const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('movies', serializedState);
  } catch (e) {
    console.warn("Could not save movies to localStorage", e);
  }
};

const initialState = {
  movies: loadFromLocalStorage(),
};

const fetmovieDetails = async (title) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTc1NTE0NTFjY2E1ODkwYmIyZjc1Y2FmY2FmNTVjMSIsIm5iZiI6MTcyNTQzNTM5MS4yMjczNzYsInN1YiI6IjY2ZDczYWZjMmI2Y2QzNjY1MjQ0ZDA4ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.By9t9q38N-MQrOAHbd40nDMGYatyCC1sKaICdSGh5R0',
    },
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en-US&page=1`, options);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

export const fetchMovieAndAdd = createAsyncThunk(
  'movie/fetchMovieAndAdd',
  async (title, { dispatch }) => {
    const movieinfo = await fetmovieDetails(title);

    if (movieinfo) {
      const newMovie = {
        id: nanoid(),
        title: movieinfo.title,
        year: movieinfo.release_date,
        language: movieinfo.original_language,
        summary: movieinfo.overview,
        img: `https://image.tmdb.org/t/p/w500${movieinfo.poster_path}`,
      };

      dispatch(addMovie(newMovie));
    }
  }
);

export const MovieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
      saveToLocalStorage(state.movies);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
      saveToLocalStorage(state.movies);
    }
  }
});

export const { addMovie, removeMovie } = MovieSlice.actions;

export default MovieSlice.reducer;
