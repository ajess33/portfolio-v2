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
          Michael and his jeans... he gets in them, and I'm not exactly sure
          what happens, but I can tell you he loves the way he looks in those
          jeans. I know that's why he started casual Fridays.
        </p>
        <p>
          I wish there was a way to know you're in the good old days before
          you've actually left them.
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
          Michael and his jeans... he gets in them, and I'm not exactly sure
          what happens, but I can tell you he loves the way he looks in those
          jeans. I know that's why he started casual Fridays.
        </p>
        <p>
          I wish there was a way to know you're in the good old days before
          you've actually left them.
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
        <p>
          Michael and his jeans... he gets in them, and I'm not exactly sure
          what happens, but I can tell you he loves the way he looks in those
          jeans. I know that's why he started casual Fridays.
        </p>
        <p>
          I wish there was a way to know you're in the good old days before
          you've actually left them.
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
