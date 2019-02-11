import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const AcgImage = () => (
  <StaticQuery
    query={graphql`
      query {
        acg: file(relativePath: { eq: "acg-500.png" }) {
          childImageSharp {
            fixed(width: 300, height: 356) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => {
      return <Img fixed={data.acg.childImageSharp.fixed} />;
    }}
  />
);

export default AcgImage;
