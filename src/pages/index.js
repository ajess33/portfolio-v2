import React from 'react';
import { Link } from 'gatsby';
import '../styles/home.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <main className="about-wrapper">
      <h1 className="section-title">Who Am I?</h1>
      <p>
        My name is <a href="https://twitter.com/ajessscript">Austin Jess</a> and
        I'm a web developer.
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
    </main>
  </Layout>
);

export default IndexPage;
