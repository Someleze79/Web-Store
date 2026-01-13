// src/pages/About.js

import React from 'react';
import { Figure } from 'react-bootstrap';

function About() {
  return (
    <div className="container mt-5">
      <h2>About Our Store</h2>
      <p>We are a fictional online store selling the best products for your needs!</p>

      <Figure>
        <Figure.Image width={171} height={180} alt="Logo" src="Logo01.jpeg" />
        <Figure.Caption>
          Our official store logo.
        </Figure.Caption>
      </Figure>

      <div className="row mt-4">
        <div className="col-md-6">
          <Figure>
            <Figure.Image width="100%" alt="Store 1" src="storeIMG01.jpeg" />
            <Figure.Caption>Inside our store (fictional).</Figure.Caption>
          </Figure>
        </div>
        <div className="col-md-6">
          <Figure>
            <Figure.Image width="100%" alt="Store 2" src="storeIMG02.jpeg" />
            <Figure.Caption>Another angle of our store.</Figure.Caption>
          </Figure>
        </div>
      </div>

      <h4 className="mt-4">Contact Us</h4>
      <p>Email: support@grooveline.com</p>
      <p>Phone: +27 62 862 4515</p>
    </div>
  );
}

export default About;