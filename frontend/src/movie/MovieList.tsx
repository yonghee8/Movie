import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import Container from 'react-bootstrap/esm/Container';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const data = await rsp.json();
      setMovieData(data);
    };

    fetchMovie();
  }, []);

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
                <th>Category</th>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr key={m.movieId}>
                  <td>{m.category}</td>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
}

export default MovieList;
