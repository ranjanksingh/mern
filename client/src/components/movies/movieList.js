import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movie = (props) => (
  <tr>
    <td>{props.movie._id}</td>
    <td>{props.movie.name}</td>
    <td>{props.movie.year}</td>
    <td>{props.movie.rating}</td>
    <td>
      <Link className="btn btn-link" to={`/movie/${props.movie._id}`}>Edit</Link> |
      <button className="btn btn-link"
        onClick={() => {
          props.deleteMovie(props.movie._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getMovies() {
      const response = await fetch(`http://localhost:5000/movies/`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const movies = await response.json();
      setMovies(movies);
    }

    getMovies();

    return; 
  }, [movies.length]);

  // This method will delete a record
  async function deleteMovie(id) {
    await fetch(`http://localhost:5000/movies/${id}`, {
      method: "DELETE"
    });

    const newRecords = movies.filter((el) => el._id !== id);
    setMovies(newRecords);
  }

  // This method will map out the records on the table
  function moviesList() {
    return movies.map((movie) => {
      return (
        <Movie
          movie={movie}
          deleteMovie={() => deleteMovie(movie._id)}
          key={movie._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Movies List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Year</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{moviesList()}</tbody>
      </table>
    </div>
  );
}
