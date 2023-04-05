import Container from 'react-bootstrap/esm/Container';
import data from './MovieData.json';
// import { useState } from 'react';

const md = data.MovieData;

function MovieList() {
  /* const [listOfMovies, setListOfMovies] = useState(md);

  const addMovie = () => {
    setListOfMovies([
      ...md,
      {
        Category: 'Action/Adventure',
        Title: 'Harry Potter and the Order of the Phoenix',
        Year: 2007,
        Director: 'David Yates',
        Rating: 'PG-13',
      },
    ]);
  }; */

  return (
    <>
      <Container>
        <div className="p-3 text-center">
          <h3>Joel Hilton's Movie Collection</h3>
        </div>

        <div className="p-3">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>

            <tbody>
              {md.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </Container>

      {/* <button className="btn btn-primary" onClick={addMovie}>Add Movie</button> */}
    </>
  );
}

export default MovieList;
