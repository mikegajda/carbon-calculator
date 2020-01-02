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
            description={`Carbon Calculator detects the price of items as your browse on the web and shows you the estimated
                carbon impact of these items`}
            url={`/`}
            image={`/img/social-share-banner.png`}
            ogType={"article"}
            twitterSummaryType={"summary_large_image"}
          />
          <article className="container p-0 card my-4 shadow">
            <BannerImage />
            <div className="card-body">
              <p>
                Carbon Calculator detects the price of items as your browse on
                the web and shows you the estimated carbon impact of these
                items.
              </p>
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
