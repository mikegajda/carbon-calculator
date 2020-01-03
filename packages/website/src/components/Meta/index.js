import React from "react";
import Helmet from "react-helmet";
import * as PropTypes from "prop-types";

export function getTitleFromHostname(defaultTitle) {
  try {
    switch (window.location.hostname) {
      case "localhost":
        return "Carbon Calculator LOCAL";
      default:
        return defaultTitle;
    }
  } catch {
    return defaultTitle;
  }
}

export function getHostName() {
  try {
    return window.location.hostname;
  } catch {
    return "carbon-calculator.netlify.com";
  }
}

export const defaultTitlePrefix = "Carbon Calculator";
export default class Meta extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titlePrefix: defaultTitlePrefix };
  }

  componentDidMount() {
    this.setState({
      titlePrefix: getTitleFromHostname(defaultTitlePrefix)
    });
  }

  render() {
    let title = this.state.titlePrefix;
    let ogTitle = this.state.titlePrefix;
    if (this.props.title) {
      title = `${this.state.titlePrefix} | ${this.props.title}`;
      ogTitle = this.props.title;
    }

    return (
      <Helmet
        title={title}
        meta={[
          { name: "twitter:card", content: `${this.props.twitterSummaryType}` },
          {
            name: "twitter:site",
            content: `@CO2Calculator`
          },
          {
            name: "twitter:creator",
            content: `@CO2Calculator`
          },
          { property: "og:title", content: `${ogTitle}` },
          { property: "og:type", content: `${this.props.ogType}` },
          {
            property: "og:description",
            content: `${this.props.description}`
          },
          {
            property: "og:url",
            content: `https://${getHostName()}${this.props.url}`
          },
          {
            property: "og:image",
            content: `https://${getHostName()}${this.props.image}`
          }
        ]}
      />
    );
  }
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  twitterSummaryType: PropTypes.string,
  ogType: PropTypes.string
};

Meta.defaultProps = {
  description: "No description available at this time.",
  url: "/",
  image: "/img/social-share-banner.png",
  twitterSummaryType: "summary",
  ogType: "website"
};
