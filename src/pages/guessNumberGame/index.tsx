import React, { useState } from 'react'

import { Body, Container, ResultBox } from './style'

interface Props {}

const GuessNumberGame: React.FC<Props> = ({}) => {
  return (
    <>
      <Body>
        <Container></Container>
        <ResultBox></ResultBox>
      </Body>
    </>
    // <DynamicCalenderBody>
    //   <DynamicCalenderContainer></DynamicCalenderContainer>
    // </DynamicCalenderBody>
  )
}

export default GuessNumberGame
