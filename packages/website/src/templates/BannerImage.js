import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
     query {
      file(relativePath: { eq: "banner-logo.png" }) {
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
    render={(data) => {
      console.log('here', data)
      return (
        <Img className="card-img-top"
             style={{ display: 'block', margin: '0 auto' }} fluid={data.file.childImageSharp.fluid}/>
      )
    }
    }
  />
)