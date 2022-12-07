import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const About = () => (
  <div>
    <ul className="about__content">
      <li className="about__list">
        <Link to="about-app">About App</Link>
      </li>
      <li>
        <Link to="about-author">About Author</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

export default About;
