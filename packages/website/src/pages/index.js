import React from "react";
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from "components/Meta";
import Layout from "components/Layout";
import { DemoCard } from "./demo";
import { CarbonFootprintCalculationsCard } from "./carbon-footprint-calculations";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: 12.0 };
  }

  render() {
    return (
      <Layout location={"/"}>
        <div className="px-0">
          <Meta title={`Home`} description={`Description`} url={`/`} />
          <DemoCard />
          <article className="container p-0 card my-4 shadow">
            <div className="card-body">
              <h1>Chrome Extension</h1>
              <h3>Installing the Extension</h3>
              <p></p>
            </div>
          </article>
          <CarbonFootprintCalculationsCard />

          <article className="container p-0 card my-4 shadow">
            <div className="card-body">
              <h1>How Do You Make Money?</h1>
              <h3>Is Carbon Calculator a Charity?</h3>
              <p>
                Not yet—but we're working on that. In the meantime, Carbon
                Calculator commits to publicly releasing revenue metrics and
                using any profits to purchase carbon offsets. This means Carbon
                Calculator is a good way to automatically offset your online
                shopping, as any affiliate fees that generate profit will
                purchase carbon offsets.
              </p>
              <h3>Affiliate Links</h3>
              <p>
                On certain websites the Carbon Calculator browser extension will
                modify the URL to include our affiliate link. This is
                transparent to the user, and does not allow Carbon Calculator to
                collect any information on users.
              </p>
            </div>
          </article>
        </div>
      </Layout>
    );
  }
}

export default index;
