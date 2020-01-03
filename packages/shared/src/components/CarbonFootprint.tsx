import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const convert = require('convert-units')

function convertStringPriceToNumber (input: string): number {
  input = input.replace('$', '')
  let result: number = Number.parseFloat(input)
  if (Number.isNaN(result)) {
    return 0.00
  } else {
    return result
  }
}

function getGramsOfCarbonForPrice (input: number): number {
  return input * 128.9
}

interface Props {
  price: string
}

export function CarbonFootprint (props: Props) {

  let price = convertStringPriceToNumber(props.price)
  let gramsOfCarbon = getGramsOfCarbonForPrice(price)
  let poundsOfCarbon = convert(gramsOfCarbon).from('g').to('lb')
  let bestUnit = convert(poundsOfCarbon).from('lb').toBest()
  return (
    <div className={`row`}>   
      <div className={'col-6 d-flex'}>
        <h4 className={'align-self-center my-0'}>CO<sub>2</sub> Calculator
          <a className={"text-dark"} href={'https://carbon-calculator.netlify.com'}>
            <FontAwesomeIcon className={'pl-1'}
                             icon={faInfoCircle}/>
          </a>

        </h4>
      </div>
      <div className={'col-6'}>
        <div className={'text-right'}>
          <small className={''}>CO<sub>2</sub> Footprint</small>

          <h4>{bestUnit.val.toLocaleString(undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          })} {bestUnit.plural.toLowerCase()}</h4>
        </div>
      </div>
    </div>
  )
}
