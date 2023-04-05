import React from 'react';
import { Container } from 'react-bootstrap';
import './Blah.module.css';

function TopBanner(props: any) {
  return (
    <>
      <Container fluid>
        <div className="text-center">
          <div className="p-3">
            <h1>Joel Hilton's Movie Collection</h1>
            <div className="p-3" style={{ width: '200' }}>
              <img src="./JoelHiltonHeadshot.jpg" alt="logo" />
            </div>
            <p>This is a website about Joel and his Movie Collection.</p>
          </div>
        </div>
      </Container>
    </>
  );
}

export default TopBanner;
