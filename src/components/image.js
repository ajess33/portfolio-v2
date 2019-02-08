import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

// const Image = () => (
//   <StaticQuery
//     query={graphql`
//       query {
//         placeholderImage: file(relativePath: { eq: "headshot-bw.png" }) {
//           childImageSharp {
//             fluid(maxWidth: 550) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     `}
//     render={(data) => (
//       <Img fluid={data.placeholderImage.childImageSharp.fluid} />
//     )}
//   />
// );
// export default Image;

export const DunderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "dunderIpsum-550.png" }) {
          childImageSharp {
            fluid(maxWidth: 550) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    )}
  />
);

// export const query = graphql`
//   query {
//     dunderImage: file(relativePath: { eq: "dunderIpsum-550.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 550) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }

//     acgImage: file(relativePath: { eq: "acg-550.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 550) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }

//     pomoImage: file(relativePath: { eq: "pomo-550.png" }) {
//       childImageSharp {
//         fluid(maxWidth: 550) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
