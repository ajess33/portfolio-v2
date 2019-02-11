import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const PomoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        pomo: file(relativePath: { eq: "pomo-500.png" }) {
          childImageSharp {
            fixed(width: 300, height: 356) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => {
      return <Img fixed={data.pomo.childImageSharp.fixed} />;
    }}
  />
);

export default PomoImage;
