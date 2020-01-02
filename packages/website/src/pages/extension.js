import React from 'react'
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from 'components/Meta'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { CarbonFootprint } from '../../../shared/src/components/CarbonFootprint'

export class ExtensionCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { price: 12.0 }
  }

  render () {
    return (
      <article className="container p-0 card my-4 shadow">
        <div className="card-body">
          <h1>Chrome Extension</h1>
          <h3>Installation</h3>
          <h3>Privacy</h3>
          <p>Carbon Calculator does not collect any information as you browse, nor does it share any information with
            third
            parties. It does need to ask for Chrome
            permissions so it can read data on websites that we support showing carbon estimates for. The code is fully
            open-sourced here so that you can take a look for yoursel: <a
              href={'https://github.com/mikegajda/carbon-calculator'}>Carbon Calculator Source
              Code</a></p>
        </div>
      </article>
    )
  }
}

class extension extends React.Component {
  render () {
    return (
      <Layout location={'/'}>
        <div className="px-0">
          <Meta
            title={`Carbon Calculator Extension`}
            description={`Carbon Calculator Extension`}
            url={`/extension`}
          />
          <ExtensionCard/>
        </div>
      </Layout>
    )
  }
}

export default extension
