import React from 'react'
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from 'components/Meta'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { CarbonFootprint } from '../../../shared/src/components/CarbonFootprint'

export class CarbonFootprintCalculationsCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = { price: 12.0 }
  }

  render () {
    return (
      <article className="container p-0 card my-4 shadow">
        <div className="card-body">
          <h1>How Is the Carbon Footprint Calculated?</h1>
          <h3>Estimating the Carbon Intensity for a Particular Item</h3>
          <p>
            Certain retailers publish a Economic Input-Output Life Cycle
            Assessment (EIO LCA) that attempts to account for the carbon
            emissions incurred in creating an item. The assessment generally
            include estimates of the carbon intensity for the following
            activities:
            <ul>
              <li>
                <b>Production</b> of all inputs (from the raw materials to the
                final product)
              </li>
              <li>
                <b>Transportation</b> for all inputs as well as delivery to the
                customer
              </li>
              <li>
                <b>Packaging</b> for the final product
              </li>
              <li>
                <b>Electricity</b> for running the retailer (from keeping the
                lights on at physical stores to the electricity used by servers
                to process the sale)
              </li>
            </ul>
          </p>
          <p>
            It should be noted, this is an estimate and cannot fully account for
            all emissions attributable to the production of an item. At this
            time the EIO LCA model is most widely used, but Carbon Calculator is open to adopting new methodologies. If
            you have a concern about accuracy, feel free to
            raise an issue on GitHub:{' '}
            <a href={'https://github.com/mikegajda/carbon-calculator/issues'}>
              GitHub Issues
            </a>
          </p>
          <h3>Estimating the Carbon Intensity for a Retailer</h3>
          <p>
            After computing the estimate of emissions for all items sold, an
            aggregate metric can be computed for the retailer: the estimated
            carbon released per dollar of revenue. Some companies (e.g. Amazon)
            provide this directly while others do not go this far and Carbon
            Calculator uses SEC reports to calculate this figure.
          </p>
          <h3>Supported Retailers</h3>
          <p>
            Carbon Calculator currently supports the following retailers:
            <ul>
              <li>
                <b>Amazon.com</b>{' '}
                <a
                  href={
                    'https://d39w7f4ix9f5s9.cloudfront.net/a4/ad/b9eca67e4578b35e8f995c8b4f9c/amazon-carbon-methodology-september-2019.pdf'
                  }
                >
                  Amazon September 2019 EIO LCA Report
                </a>
              </li>
            </ul>
          </p>
          <p>
            If you know of a retailer that isn't supported on the list above but
            is publishing carbon footprint metrics, create an issue here:{' '}
            <a href={'https://github.com/mikegajda/carbon-calculator/issues'}>
              GitHub Issues
            </a>
          </p>
        </div>
      </article>
    )
  }
}

class carbonFootprintCalculations extends React.Component {
  render () {
    return (
      <Layout location={'/'}>
        <div className="px-0">
          <Meta
            title={`Carbon Footprint Calculations`}
            description={`Carbon Footprint Calculations`}
            url={`/carbon-footprint-calculations`}
          />
          <CarbonFootprintCalculationsCard/>
        </div>
      </Layout>
    )
  }
}

export default carbonFootprintCalculations
