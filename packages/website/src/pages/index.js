import React from "react";
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from "components/Meta";
import Layout from "components/Layout";
import { DemoCard } from "./demo";
import { CarbonFootprintCalculationsCard } from "./carbon-footprint-calculations";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import BannerImage from "templates/BannerImage";
import { AboutUsCards } from "./about-us";
import { ExtensionCard } from "./extension";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 12.0 };
  }

  render() {
    return (
      <Layout location={"/"}>
        <div className="px-0">
          <Meta
            title={`Home`}
            description={`Carbon Calculator estimates the carbon footprint of the items you’re looking at online.`}
            url={`/`}
            image={`/img/social-share-banner-new.png`}
            ogType={"article"}
            twitterSummaryType={"summary_large_image"}
          />
          <article className="container p-0 card my-4 shadow">
            <BannerImage />
            <div className="card-body">
              <p>
                Carbon Calculator estimates the carbon footprint of the items
                you’re looking at online.
              </p>
              <a
                target={"_blank"}
                className={"btn btn-dark btn-block font-weight-bold mt-2"}
                href={
                  "https://chrome.google.com/webstore/detail/carbon-calculator/onljifombjjdcdloodaffmkaphjlgmab"
                }
              >
                Download Carbon Calculator for Google Chrome
              </a>
            </div>
          </article>
          <DemoCard />

          <ExtensionCard />
          <CarbonFootprintCalculationsCard />
          <AboutUsCards />
        </div>
      </Layout>
    );
  }
}

export default index;
