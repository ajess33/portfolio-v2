import React from 'react';
// import { Img } from 'gatsby-image';
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
      <div className="buttons">
        <a href="https://ajess33.github.io/dunder-mifflinipsum/">LIVE</a>
        <a href="https://github.com/ajess33/dunder-mifflinipsum">CODE</a>
      </div>
    </div>
    <DunderImage className="project-image" />
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
        <a href="https://ajess33.github.io/dunder-mifflinipsum/">LIVE</a>
        <a href="https://github.com/ajess33/dunder-mifflinipsum">CODE</a>
      </div>
    </div>
    <AcgImage className="project-image" />
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
        <a href="https://ajess33.github.io/dunder-mifflinipsum/">LIVE</a>
        <a href="https://github.com/ajess33/dunder-mifflinipsum">CODE</a>
      </div>
    </div>
    <PomoImage className="project-image" />
  </div>
);

// export const query = graphql`
//   query {
//     dunderImage: file(relativePath: { eq: "dunder-500.png" }) {
//       childImageSharp {
//         fixed(width: 300) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }

//     acgImage: file(relativePath: { eq: "acg-500.png" }) {
//       childImageSharp {
//         fixed(width: 300) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }

//     pomoImage: file(relativePath: { eq: "pomo-500.png" }) {
//       childImageSharp {
//         fixed(width: 300) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }
// `;

// <div className="project-flex">
//   <div>
//     <h3>Dunder MifflinIpsum</h3>
//     <hr />
//     <p>
//       Michael and his jeans... he gets in them, and I'm not exactly sure
//       what happens, but I can tell you he loves the way he looks in those
//       jeans. I know that's why he started casual Fridays.
//     </p>
//     <p>
//       I wish there was a way to know you're in the good old days before
//       you've actually left them.
//     </p>
//   </div>
//   <DunderImage className="project-image" />
// </div>
// <div className="project-flex">
//   <div>
//     <h3>A Clean Getaway Website</h3>
//     <hr />
//     <p>
//       Michael and his jeans... he gets in them, and I'm not exactly sure
//       what happens, but I can tell you he loves the way he looks in those
//       jeans. I know that's why he started casual Fridays.
//     </p>
//     <p>
//       I wish there was a way to know you're in the good old days before
//       you've actually left them.
//     </p>
//   </div>
//   <AcgImage className="project-image" />
// </div>
// <div className="project-flex">
//   <div>
//     <h3>Pomodoro Clock</h3>
//     <hr />
//     <p>
//       Michael and his jeans... he gets in them, and I'm not exactly sure
//       what happens, but I can tell you he loves the way he looks in those
//       jeans. I know that's why he started casual Fridays.
//     </p>
//     <p>
//       I wish there was a way to know you're in the good old days before
//       you've actually left them.
//     </p>
//   </div>
//   <PomoImage className="project-image" />
// </div>
