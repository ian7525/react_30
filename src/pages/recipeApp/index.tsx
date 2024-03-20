import React, { useState } from 'react'

import { Body, Container, GlobalStyles } from './style'

interface Props {}

const RecipeApp: React.FC<Props> = ({}) => {
  return (
    <>
      <GlobalStyles />
      <Body>
        <Container></Container>
      </Body>
    </>
  )
}

export default RecipeApp
