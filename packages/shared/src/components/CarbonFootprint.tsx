import React, { useEffect, useState } from 'react'

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

  return (
      <div className={`row`}>
        <div className={'col-6 d-flex'}>
          <h4 className={'align-self-center my-0'}>CO<sub>2</sub> Calculator</h4>
        </div>
        <div className={'col-6'}>
          <div className={'text-right'}>
            <small className={'font-weight-light'}>CO<sub>2</sub> Footprint</small>
            <h4>{getGramsOfCarbonForPrice(convertStringPriceToNumber(props.price)).toLocaleString(undefined, {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2
            })}g</h4>
          </div>
        </div>
      </div>
  )
}
