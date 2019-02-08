import React from 'react';
// import { Link } from "gatsby"
import { Img } from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import DunderImage from '../components/image';

const SecondPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>My Portfolio</h1>
    <DunderImage />
  </Layout>
);

export default SecondPage;
