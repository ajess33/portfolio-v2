import React from 'react';
import '../styles/home.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

// todo:

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="about-wrapper">
      <h1 className="section-title">Who Am I?</h1>
      <p>
        I'm{' '}
        <a className="chunky-link" href="https://twitter.com/austinjessJS">
          @austinjessJS
        </a>{' '}
        and I'm a web developer.
      </p>
      <p>
        I'm a deer hunter. I go all the time with my dad. One thing about deer:
        they have very good vision. One thing about me: I'm better at hiding,
        than they are at vision.
      </p>
      <p>I'm always one step ahead... like a carpenter... that makes stairs.</p>
      <p>
        Nobody steals from Creed Bratton and gets away with it. The last person
        to do this disappeared. His name? Creed Bratton
      </p>
    </div>
  </Layout>
);

export default IndexPage;
