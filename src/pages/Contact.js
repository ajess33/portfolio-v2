import React from 'react';
import '../styles/home.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="contact-wrapper">
      <h1 className="section-title">Get in Touch</h1>
      <ul>
        <a href="https://twitter.com/austinjessJS">
          <li>
            <span className="chunky-link">TWITTER</span> @austinjessJS
          </li>
        </a>
        <a href="https://github.com/ajess33">
          <li>
            <span className="chunky-link">GITHUB</span> /ajess33
          </li>
        </a>
        <a href="https://www.linkedin.com/in/austinjess/">
          <li>
            <span className="chunky-link">LINKEDIN</span> /austinjess
          </li>
        </a>
        <a href="mailto:ajess33@gmail.com">
          <li>
            <span className="chunky-link">EMAIL</span> /ajess33@gmail.com
          </li>
        </a>
      </ul>
    </div>
  </Layout>
);

export default Contact;
