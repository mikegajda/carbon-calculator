import React from "react";
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from "components/Meta";
import Layout from "components/Layout";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { CarbonFootprint } from "../../../shared/src/components/CarbonFootprint";

export class DemoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 12.0 };
  }

  render() {
    return (
      <article className="container p-0 card my-4 shadow">
        <div className="card-body">
          <h1 className="">Demo</h1>
          <p>
            Change the price in the box below to see the estimated carbon
            footprint go up and down. This demo uses Amazon.com's estimated CO
            <sub>2</sub> footprint per USD for calculations.
          </p>
          <div className={"form-group"}>
            <label htmlFor="exampleInputEmail1">Price of item (USD $)</label>
            <input
              type="number"
              className="form-control"
              id="demoInput"
              aria-describedby="priceHelp"
              placeholder="Price"
              onChange={e => {
                this.setState({
                  price: e.target.value
                });
              }}
              value={this.state.price}
            />
          </div>
          <div
            className={"rounded"}
            style={{ zIndex: 9999, background: "#F7B434" }}
          >
            <div className={"container rounded"}>
              <CarbonFootprint price={this.state.price.toString()} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

class demo extends React.Component {
  render() {
    return (
      <Layout location={"/"}>
        <div className="px-0">
          <Meta
            title={`Demo`}
            description={`Carbon Calculator Demo`}
            url={`/demo`}
          />
          <DemoCard />
        </div>
      </Layout>
    );
  }
}

export default demo;
