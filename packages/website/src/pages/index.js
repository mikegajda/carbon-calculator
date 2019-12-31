import React from "react";
import Meta from "components/Meta";
import Layout from "components/Layout";
import Img from "gatsby-image";
import { Link } from "gatsby";

class index extends React.Component {
  render() {
    return (
      <Layout location={"/"}>
        <div className="px-0">
          <Meta title={`Home`} description={`Description`} url={`/`} />
          <article className="container p-0 card my-4 shadow">
            <div className="card-body">
              <h1 className="">Carbon Calculator</h1>
            </div>
          </article>
        </div>
      </Layout>
    );
  }
}

export default index;
