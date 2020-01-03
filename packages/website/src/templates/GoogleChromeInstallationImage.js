import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default props => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "google-chrome-installation-image.png" }) {
          childImageSharp {
            fluid(maxWidth: 738) {
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          className={`${props.className}`}
          style={{ display: "block", margin: "0 auto" }}
          fluid={data.file.childImageSharp.fluid}
        />
      );
    }}
  />
);
