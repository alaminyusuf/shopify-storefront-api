/* eslint-disable no-lone-blocks */
import React from 'react'
import styled from 'styled-components'

// import context
import AppContext from '../state/AppContext'

const Img = () => {
  const state = React.useContext(AppContext)
  const { prodImg, products } = state

  // console.log(products)
  return (
    <Image
      src={prodImg}
      alt={products.map(prod => (
        <p>{prod.title}</p>
      ))}
    />
  )
}

const Image = styled.img`
  width: 90%;
  height: 90%px;
`

export default Img
