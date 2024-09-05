import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { fetchMovieAndAdd, removeMovie } from './MovieSlice';

function App() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  const addtoList = (e) => {
    e.preventDefault();

    if (title === "") {
      alert("Please enter a movie name 🍿 ");
      return false;
    }

    dispatch(fetchMovieAndAdd(title));
    setTitle("");
  };

  const handleRemove = (id) => {
    dispatch(removeMovie(id));
  };

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="container">
      <h1>My Movie List 🍿</h1>

      <form>
        <label htmlFor="title">Movie Title</label>
        <input 
          type="text" 
          id='title' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          name='title' 
          placeholder='Enter Movie Name' 
        />
        <button onClick={addtoList}>Add to List 🎬</button>
      </form>

      <div className="movie-row">
        {
          movies.map((movie) => (
            <div className="movie-box" key={movie.id}>
              <img src={movie.img} alt={movie.title} />
              <div className="movie-info">
                <h2>{movie.title}</h2>
                <span>{movie.year}</span>
                <p><b>Language:</b> {movie.language}</p>
                <i>{movie.summary}</i>
                <div className="action-btn">
                  <a href="#">Watch Now</a>
                  <button onClick={() => handleRemove(movie.id)}>🗑️</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
