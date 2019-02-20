import React from 'react';
import { Link } from 'gatsby';
import '../styles/home.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

// todo:

const IndexPage = () => (
  <Layout>
    <SEO title="About" keywords={[`react`, `web developer`, `javascript`]} />
    <div className="about-wrapper">
      <h1 className="section-title">Who Am I?</h1>
      <div className="about-info">
        <p>
          I'm{' '}
          <a className="chunky-link" href="https://twitter.com/austinjessJS">
            @austinjessJS
          </a>{' '}
          and I'm a web developer.
        </p>
        <p>
          I have a passion for building things, but I'm not good with my hands
          so I work with computers.
        </p>
        <p>
          As of right now, my weapon of choice is{' '}
          <a className="chunky-link" href="https://reactjs.org/">
            React
          </a>{' '}
          but I'm always looking for new things new learn, which is something I
          love about the web development industry.
        </p>
        <p>
          I am looking to gain more experience as a web developer so if you know
          of an opportunity or would just like to talk, please feel free to
          reach out!
        </p>
      </div>
      <Link className="contact-button" to="/Contact/">
        GET IN TOUCH
      </Link>
    </div>
  </Layout>
);

export default IndexPage;
