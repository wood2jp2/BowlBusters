import glamorous from 'glamorous'
import React from 'react'

const { Div } = glamorous

let Footer = () => {
  return (
    <Div
      fontSize={8}
      textAlign='center'
      padding='20px 20px 20px 20px'
      marginTop='60%'>
        Created by Joshua Wood, Copyright 2018
      </Div>
  )
}

export default Footer
