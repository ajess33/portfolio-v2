import React from 'react';
import { Link } from 'gatsby';
import '../styles/home.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Toolbox = () => (
  <Layout>
    <SEO title="Toolbox" />
    <main className="tool-wrapper">
      <h1 className="section-title">My Toolbox</h1>
      <ul>
        <li>JavaScript</li>
        <li>ES2015</li>
        <li>Babel</li>
        <li>React.js</li>
        <li>Gatsby</li>
        <li>npm</li>
        <li>Yarn</li>
        <li>Git</li>
        <li>Github</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SCSS/SASS</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>Netlify</li>
      </ul>
      <Link className="contact-button" to="/Contact/">
        GET IN TOUCH
      </Link>
    </main>
  </Layout>
);

export default Toolbox;
