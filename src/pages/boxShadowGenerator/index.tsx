import React, { useState } from 'react'

import { BoxShodowBody, BoxShadowContainer } from './style'

interface Props {}

const BoxShadowGenerator: React.FC<Props> = ({}) => {
  const [horizonVal, setHorizonVal] = useState(0)
  const [verticalVal, setVerticalVal] = useState(0)
  const [blurVal, setBlurVal] = useState(19)
  const [spreadVal, setSpreadVal] = useState(0)

  const [shadow, setShadow] = useState('0px 0px 19px 0px #000000')
  const [boxColor, setBoxColor] = useState('#0D1FE6')
  const [shadowColor, setShadowColor] = useState('#000')
  const [insertCheck, setInsertCheck] = useState(false)

  const generateShadow = () => {
    const h = horizonVal
    const v = verticalVal
    const b = blurVal
    const s = spreadVal

    const shadow = `${h}px ${v}px ${b}px ${s}px ${shadowColor} ${
      insertCheck ? 'inset' : ''
    }`
    setShadow(shadow)
  }

  return (
    <BoxShodowBody>
      <BoxShadowContainer boxShadow={shadow} backgroundColor={boxColor}>
        <input
          type="color"
          className="box-color-input"
          value={boxColor}
          onChange={(e) => {
            setBoxColor(e.target.value)
          }}
          onMouseUp={generateShadow}
        />
        <input
          type="color"
          className="shadow-color-input"
          value={shadowColor}
          onChange={(e) => {
            setShadowColor(e.target.value)
          }}
          onMouseUp={generateShadow}
        />
        <div className="output-box"></div>
        <div className="setting-box">
          <div className="horizontal">
            <p>H</p>
            <input
              type="range"
              className=""
              value={horizonVal}
              onChange={(e) => {
                setHorizonVal(+e.target.value)
              }}
              onMouseUp={generateShadow}
            />
          </div>
          <div className="vertical">
            <p>V</p>
            <input
              type="range"
              className=""
              value={verticalVal}
              onChange={(e) => {
                setVerticalVal(+e.target.value)
              }}
              onMouseUp={generateShadow}
            />
          </div>
          <div className="Blur">
            <p>Blur</p>
            <input
              type="range"
              className=""
              value={blurVal}
              onChange={(e) => {
                setBlurVal(+e.target.value)
              }}
              onMouseUp={generateShadow}
            />
          </div>
          <div className="Spread">
            <p>Spread</p>
            <input
              type="range"
              className=""
              value={spreadVal}
              onChange={(e) => {
                setSpreadVal(+e.target.value)
              }}
              onMouseUp={generateShadow}
            />
          </div>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            name=""
            id=""
            checked={insertCheck}
            onChange={(e) => {
              setInsertCheck(!insertCheck)
            }}
            onMouseUp={generateShadow}
          />
          <span>inset</span>
        </div>
        <div className="code-box">
          <p>box-shadow: {shadow}</p>
        </div>
      </BoxShadowContainer>
    </BoxShodowBody>
  )
}

export default BoxShadowGenerator
