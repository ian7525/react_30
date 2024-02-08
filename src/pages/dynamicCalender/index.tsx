import React, { useState } from 'react'

import { DynamicCalenderBody, DynamicCalenderContainer } from './style'

interface Props {}

const DynamicCalender: React.FC<Props> = ({}) => {
  return (
    <DynamicCalenderBody>
      <DynamicCalenderContainer></DynamicCalenderContainer>
    </DynamicCalenderBody>
  )
}

export default DynamicCalender
