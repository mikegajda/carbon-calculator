import React from 'react'
import Meta, { defaultTitlePrefix, getTitleFromHostname } from 'components/Meta'
import Layout from 'components/Layout'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { CarbonFootprint } from '../../../shared/src/components/CarbonFootprint'

class index extends React.Component {
  constructor (props) {
    super(props)
    this.state = { price: 12.00 }
  }

  render () {
    return (
      <Layout location={'/'}>
        <div className="px-0">
          <Meta title={`Home`} description={`Description`} url={`/`}/>
          <article className="container p-0 card my-4 shadow">
            <div className="card-body">
              <h1 className="">Live Demo</h1>
              <div className={'form-group'}>
                <label htmlFor="exampleInputEmail1">Price of item (USD $)</label>
                <input type="number" className="form-control" id="demoInput" aria-describedby="priceHelp"
                       placeholder="Price" onChange={(e) => {
                  this.setState({
                    price: e.target.value
                  })
                }}

                       value={this.state.price}
                />
              </div>
              <div className={"rounded"} style={{ zIndex: 9999, background: '#F7B434' }}>
                <div className={'container rounded'}>
                  <CarbonFootprint price={this.state.price.toString()}/>
                </div>
              </div>
            </div>
          </article>
        </div>
      </Layout>
    )
  }
}

export default index
