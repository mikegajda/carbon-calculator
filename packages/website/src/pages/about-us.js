import React from "react";
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from "components/Meta";
import Layout from "components/Layout";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { CarbonFootprint } from "../../../shared/src/components/CarbonFootprint";

export class AboutUsCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 12.0 };
  }

  render() {
    return (
      <article className="container p-0 card my-4 shadow">
        <div className="card-body">
          <h1>About Us</h1>
          <h3>Is Carbon Calculator a Charity?</h3>
          <p>
            Not yet—but we're working on that. In the meantime, Carbon
            Calculator commits to publicly releasing revenue metrics and using
            any profits to purchase carbon offsets. This means Carbon Calculator
            is a good way to automatically offset your online shopping.
          </p>
          <h3>How Does Carbon Calculator Make Money?</h3>
          <p>
            On certain websites the Carbon Calculator browser extension will
            modify the URL to include our affiliate link (which means we'll get
            a cut of the sale if you purchase the item you're looking at). This
            is transparent to the user, and it does not allow Carbon Calculator
            to collect any information on users. We never see your data;
            therefore, we can never sell it.
          </p>
        </div>
      </article>
    );
  }
}

class aboutUs extends React.Component {
  render() {
    return (
      <Layout location={"/"}>
        <div className="px-0">
          <Meta
            title={`About Carbon Calculator`}
            description={`About Carbon Calculator`}
            url={`/about-us`}
          />
          <AboutUsCards />
        </div>
      </Layout>
    );
  }
}

export default aboutUs;
