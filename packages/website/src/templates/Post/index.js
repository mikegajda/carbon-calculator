import { Link } from "gatsby";
import get from "lodash/get";
import React from "react";
import map from "lodash/map";
import Img from "gatsby-image";
import Layout from "components/Layout";
import "./style.scss";
import Meta from "components/Meta";

export const Post = node => {
  const html = node.remark.html;
  const {
    category,
    tags,
    description,
    title,
    path,
    date,
    image
  } = node.remark.frontmatter;

  const excerpt = node.remark.excerpt;
  const link = `/posts/${node.name}`;

  const fluid = get(node, "remark.frontmatter.image.childImageSharp.fluid");

  return (
    <React.Fragment>
      <Meta
        title={title}
        description={excerpt}
        url={link}
        image={fluid ? fluid.src : undefined}
        ogType={"article"}
        twitterSummaryType={fluid ? "summary_large_image" : "summary"}
      />
      <article
        className="container p-0 card my-4 shadow"
        key={node.absolutePath}
      >
        <div className="card-header">
          <span className="text-muted">{category}</span>
          <time className="text-muted float-right" dateTime={date}>
            {date}
          </time>
        </div>
        {fluid ? <Img fluid={fluid} /> : ""}
        <div className="card-body">
          <h1 className="">
            <Link className="" to={link}>
              {title}
            </Link>
          </h1>
          <div className="content" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </React.Fragment>
  );
};

const PostContainer = ({ data, options }) => {
  const {
    category,
    tags,
    description,
    title,
    path,
    date,
    image
  } = data.post.edges[0].node.remark.frontmatter;
  const isIndex = false;
  // const { isIndex, adsense } = options
  const html = get(data.post.edges[0].node.remark, "html");
  const isMore = isIndex && !!html.match("<!--more-->");
  // const fixed = get(image, 'childImageSharp.fixed')

  let node = data.post.edges[0].node;

  return (
    <Layout
      location={`${data.post.edges[0].node.sourceInstanceName}/${data.post.edges[0].node.relativeDirectory}/${data.post.edges[0].node.name}`}
    >
      <div className="container px-0">{Post(node)}</div>
    </Layout>
  );
};

export default PostContainer;

const getDescription = body => {
  body = body.replace(/<blockquote>/g, '<blockquote class="blockquote">');
  if (body.match("<!--more-->")) {
    body = body.split("<!--more-->");
    if (typeof body[0] !== "undefined") {
      return body[0];
    }
  }
  return body;
};

const Button = ({ path, label, primary }) => (
  <Link className="readmore" to={path}>
    <span
      className={`btn btn-outline-primary btn-block ${
        primary ? "btn-outline-primary" : "btn-outline-secondary"
      }`}
    >
      {label}
    </span>
  </Link>
);

const Badges = ({ items, primary }) =>
  map(items, (item, i) => {
    return (
      <span
        className={`p-2 badge ${primary ? "badge-primary" : "badge-white"}`}
        key={i}
      >
        <i class="fa fa-tags" />
        {item}
      </span>
    );
  });

export const pageQuery = graphql`
  query PostByPath($absolutePath: String!) {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    post: allFile(filter: { absolutePath: { eq: $absolutePath } }) {
      edges {
        node {
          id: absolutePath
          relativePath
          relativeDirectory
          absolutePath
          sourceInstanceName
          name
          ext
          birthTime(formatString: "YYYY-MM-DD hh:mm:ss")
          changeTime(formatString: "YYYY-MM-DD hh:mm:ss")
          remark: childMarkdownRemark {
            id
            html
            excerpt
            frontmatter {
              layout
              title
              date(formatString: "YYYY/MM/DD")
              publishDate: date
              category
              tags
              description
              image {
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
          }
        }
      }
    }
  }
`;
