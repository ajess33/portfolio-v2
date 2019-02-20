import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DunderImage from '../components/image';
import AcgImage from '../components/imageAcg';
import PomoImage from '../components/imagePomo';

import '../styles/home.scss';

const Portfolio = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="portfolio-wrapper">
      <h1 className="section-title">My Portfolio</h1>
    </div>
    <div className="projects">
      <DunderProject />
      <AcgProject />
      <PomoProject />
      <Link className="contact-button" to="/Contact/">
        GET IN TOUCH
      </Link>
    </div>
  </Layout>
);

export default Portfolio;

const DunderProject = () => (
  <div className="project-flex">
    <div>
      <h3>Dunder Mifflin-Ipsum</h3>
      <hr />
      <div className="project-info">
        <p>
          This is a lorem ipsum generator using quotes from the tv show, 'The
          Office'.
        </p>
        <p>
          This was the first project I had made using React and it helped
          solidify some of what I had learned in tutorials. This was also when I
          fell in love with React.
        </p>
      </div>
      <div>
        <a href="https://ajess33.github.io/dunder-mifflinipsum/">LIVE</a>
        <a href="https://github.com/ajess33/dunder-mifflinipsum">CODE</a>
      </div>
    </div>
    <DunderImage />
  </div>
);

const AcgProject = () => (
  <div className="project-flex">
    <div>
      <h3>A Clean Getaway Website</h3>
      <hr />
      <div className="project-info">
        <p>
          This was the first website I ever made specifically for production.
        </p>
        <p>
          This was also my first time I had used Gatsby.js, the static site
          generator, and it has been a tool I have been using it ever since.
        </p>
      </div>
      <div className="buttons">
        <a href="https://acleangetawayllc.com/">LIVE</a>
        <a href="https://github.com/ajess33/A-Clean-Getaway-Website">CODE</a>
      </div>
    </div>
    <AcgImage />
  </div>
);

const PomoProject = () => (
  <div className="project-flex">
    <div>
      <h3>Pomodoro Clock</h3>
      <hr />
      <div className="project-info">
        <p>I made this project as part of the FreeCodeCamp curriculum.</p>
        <p>
          It was the first project I had ever created when I began teaching
          myself and I learned so much, but most importantly, I learned how
          exciting it was to build something from the ground up.
        </p>
      </div>
      <div className="buttons">
        <a href="https://ajess33.github.io/Pomodoro-Clock/">LIVE</a>
        <a href="https://github.com/ajess33/Pomodoro-Clock">CODE</a>
      </div>
    </div>
    <PomoImage />
  </div>
);
