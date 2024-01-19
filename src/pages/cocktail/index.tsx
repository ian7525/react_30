import React, { useState } from 'react'

import { CocktailBody, CocktailContainer } from './style'

interface Props {}

const CocktailSearch: React.FC<Props> = ({}) => {
  const [cocktail, setCocktail] = useState('')
  const [ingredientData, setIngredientData] = useState([''])

  const [instruction, setInstruction] = useState('')
  const [cocktailImg, setCocktailImg] = useState('')
  const [cocktailNameText, setCocktailNameText] = useState('')

  const [infoBoxDisplay, setInfoBoxDisplay] = useState('none')
  const [dispMsgDisplay, setDispMsgDisplay] = useState('')

  const getCocktailInfo = (cocktailName: any) => {
    console.log('cocktailName=', cocktailName)
    setInfoBoxDisplay('block')
    setDispMsgDisplay('none')
    console.log('infoBoxDisplay=', infoBoxDisplay)
    console.log('dispMsgDisplay=', dispMsgDisplay)
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    fetch(url + cocktailName)
      .then((res) => res.json())
      .then((data) => {
        let myCocktail = data.drinks[0]
        setCocktailImg(myCocktail.strDrinkThumb)
        setCocktailNameText(myCocktail.strDrink)
        let count = 1
        let ingredients = []

        for (let i in myCocktail) {
          let ingredient = ''
          let measure = ''

          if (i.startsWith('strIngredient') && myCocktail[i]) {
            ingredient = myCocktail[i]
            measure = myCocktail['strMeasure' + count]
            count += 1
            ingredients.push(`${measure} ${ingredient}`)
          }
        }
        setIngredientData(ingredients)
        console.log('ingredientData=', ingredientData)
        setInstruction(myCocktail.strInstructions)
      })
  }

  return (
    <CocktailBody>
      <CocktailContainer
        infoboxdisplay={infoBoxDisplay}
        dispmsgdisplay={dispMsgDisplay}
      >
        <div className="search-box">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Type cocktail name here...."
            onChange={(e) => {
              setCocktail(e.target.value)
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                getCocktailInfo(cocktail)
              }
            }}
          />
        </div>
        <p className="display-msg">Result will be displayed here....</p>
        <div className="info-box">
          <div className="cocktail-img">
            <img src={cocktailImg} alt="Loading..." />
          </div>
          <div className="cocktail-name">
            <span className="cocktail">
              {cocktailNameText && (
                <>
                  <i className="fa-solid fa-martini-glass-citrus"></i>{' '}
                  <span>{cocktailNameText}</span>
                </>
              )}
            </span>
          </div>
          <div className="ingredients-box">
            <h3>Ingredients</h3>
            <div className="ingredients">
              {ingredientData.length && (
                <ul>
                  {ingredientData.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="instructions-box">
              <h3>Instruction</h3>
              <span className="instruction">{instruction}</span>
            </div>
          </div>
        </div>
      </CocktailContainer>
    </CocktailBody>
  )
}

export default CocktailSearch
