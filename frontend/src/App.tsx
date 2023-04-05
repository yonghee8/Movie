import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import TopBanner from './Blah';
import MovieList from './movie/MovieList';
import Podcasts from './Podcasts';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Movie Collection</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movie/movielist">Movies</Nav.Link>
            <Nav.Link href="/podcasts">Podcasts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<TopBanner />} />
        <Route path="/movie/movielist" element={<MovieList />} />
        <Route path="/podcasts" element={<Podcasts />} />
      </Routes>
    </>
  );
}

export default App;
