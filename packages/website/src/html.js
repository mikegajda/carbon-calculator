import React from "react";
import "scss/gatstrap.scss";
import "animate.css/animate.css";
import "prismjs/themes/prism-okaidia.css";
import "font-awesome/css/font-awesome.css";
import { getTitleFromHostname } from "components/Navi";

export default class HTML extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Carbon Calculator" };
  }

  componentDidMount() {
    this.setState({
      title: getTitleFromHostname("Carbon Calculator")
    });
  }
  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <title>{this.state.title}</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/img/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/img/favicon-16x16.png"
          />
          <link rel="manifest" href="/img/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#01bc84"
          />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="msapplication-TileColor" content="#01bc84" />
          <meta name="msapplication-config" content="/img/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <script
            src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
          />
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"
          />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.2.6/css/swiper.min.css"
          />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}
