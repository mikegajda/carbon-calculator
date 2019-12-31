module.exports = {
  siteMetadata: {
    title: "Carbon Calculator",
    description: "Carbon Calculator's personal website",
    siteUrl: "https://mikegajda.com",
    author: "Carbon Calculator",
    twitter: "mikegajda",
    adsense: ""
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/posts/`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/images/`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              wrapperStyle: "margin-bottom: 1.0725rem;"
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Carbon Calculator",
        short_name: "carboncalculator",
        description: "Carbon Calculator",
        homepage_url: "https://carboncalculator.netlify.com",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#01bc84",
        display: "standalone",
        icons: [
          {
            src: "/img/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/img/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: ""
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-catch-links",
    "gatsby-plugin-offline",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-react-next",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allFile } }) => {
              allFile.edges.sort(function(a, b) {
                a = new Date(a.node.remark.frontmatter.publishDate);
                b = new Date(b.node.remark.frontmatter.publishDate);
                return a > b ? -1 : a < b ? 1 : 0;
              });
              return allFile.edges
                .filter(
                  edge => edge.node.remark.frontmatter.layout === "LinkPost"
                )
                .map(edge => {
                  let node = edge.node;
                  let content = "";
                  switch (node.remark.frontmatter.layout) {
                    case "LinkPost":
                      if (
                        node.remark.frontmatter.excerpt &&
                        node.remark.frontmatter.excerpt !== ""
                      ) {
                        content += `<blockquote><small>Excerpt</small><div>${node.remark.frontmatter.excerpt}</div></blockquote>`;
                      }
                      content += node.remark.html;
                      return Object.assign({}, node.frontmatter, {
                        title: node.remark.frontmatter.title,
                        description: content,
                        url: node.remark.frontmatter.link,
                        guid: node.id,
                        custom_elements: [{ "content:encoded": content }],
                        date: node.remark.frontmatter.publishDate,
                        ttl: 1
                      });

                    default:
                      return {};
                  }
                });
            },
            query: `
          {
            allFile(
              filter: { internal: { mediaType: { in: ["text/markdown"] } } }
            ) {
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
                    frontmatter {
                      layout
                      title
                      date(formatString: "YYYY/MM/DD")
                      publishDate: date
                      category
                      tags
                      description
                    }
                  }
                }
              }
            }
          }
        `,
            output: "/rss.xml"
          }
        ]
      }
    },

    {
      resolve: "gatsby-plugin-netlify",
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true
      }
    }
  ]
};
