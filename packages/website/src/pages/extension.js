import React from "react";
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from "components/Meta";
import Layout from "components/Layout";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { CarbonFootprint } from "../../../shared/src/components/CarbonFootprint";
import GoogleChromeInstallationImage from "templates/GoogleChromeInstallationImage";
import ExampleAmazonScreenshot from "templates/ExampleAmazonScreenshot";

export class ExtensionCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 12.0 };
  }

  render() {
    return (
      <article className="container p-0 card my-4 shadow">
        <div className="card-body">
          <h1>Chrome Extension</h1>
          <p>
            Carbon Calculator is available in the Google Chrome Web Store here:
            <span> </span>
            <a
              target={"_blank"}
              className={"btn btn-dark btn-block font-weight-bold mt-2"}
              href={
                "https://chrome.google.com/webstore/detail/carbon-calculator/onljifombjjdcdloodaffmkaphjlgmab"
              }
            >
              Download Carbon Calculator for Google Chrome
            </a>
          </p>
          <h3>Installation</h3>
          <p>
            Simply click the link above and then click the blue "Add to Chrome"
            button:
            <a
              target={"_blank"}
              href={
                "https://chrome.google.com/webstore/detail/carbon-calculator/onljifombjjdcdloodaffmkaphjlgmab"
              }
            >
              <GoogleChromeInstallationImage />
            </a>
          </p>
          <p>
            After this, you'll see an orange banner at the bottom of supported
            pages like this:
          </p>
          <ExampleAmazonScreenshot />
          <p></p>
          <h3>Privacy</h3>
          <p>
            Carbon Calculator does not collect any information as you browse,
            nor does it share any information with third parties. Carbon Calculator does need
            to ask for Chrome permissions so it can read the price from websites. The code is fully
            open-sourced here so that you can take a look for yourself:{" "}
            <a
              target={"_blank"}
              href={"https://github.com/mikegajda/carbon-calculator"}
            >
              Carbon Calculator Source Code
            </a>
          </p>
        </div>
      </article>
    );
  }
}

class extension extends React.Component {
  render() {
    return (
      <Layout location={"/"}>
        <div className="px-0">
          <Meta
            title={`Carbon Calculator Extension`}
            description={`Carbon Calculator Extension`}
            url={`/extension`}
          />
          <ExtensionCard />
        </div>
      </Layout>
    );
  }
}

export default extension;
