import React from "react";
import "./style.scss";
import { graphql } from "gatsby";

const Page = ({ data }) => (
  <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
);
export default Page;
