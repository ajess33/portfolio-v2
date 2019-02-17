import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

// COMMENTS FROM JOEEEEEEE
// Gatsby exports a default export

// Also the query you wrote needed a small change. You basically had it right, minius the fileName part.
const DunderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        dunder: file(relativePath: { eq: "dunder-ipsum.png" }) {
          childImageSharp {
            fixed(width: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => {
      return <Img fixed={data.dunder.childImageSharp.fixed} />;
    }}
  />
);

export default DunderImage;
