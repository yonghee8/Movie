import React from 'react';
import Container from 'react-bootstrap/esm/Container';

function Podcasts() {
  return (
    <Container>
      <div className="text-center p-3">
        <h1>My Podcasts</h1>
        <p>
          Check out my favorite podcast:{' '}
          <a href="https://baconsale.com">Baconsale</a>
        </p>
      </div>
    </Container>
  );
}

export default Podcasts;
