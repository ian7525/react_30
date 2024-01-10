import React, { useState } from 'react'

import { Form, Field } from 'react-final-form'

import { AgeBody, AgeContainer } from './style'

interface Props {}

const AgeCalculator: React.FC<Props> = ({}) => {
  //   let container = document.querySelector('.AgeContainer')
  //   let dateInput = container?.querySelector('.date-input .date input')
  //   let monthInput = container?.querySelector('.date-input .month input')
  //   let yearInput = container?.querySelector('.date-input .year input')
  //   let submitBtn = container?.querySelector('.date-input .submit-btn')
  //   let otherResultsBox = container?.querySelector('.other-results')

  const [resultDate, setResultDate] = useState(0)
  const [resultMonth, setResultMonth] = useState(0)
  const [resultYear, setResultYear] = useState(0)

  const [otherResults, setOtherResults] = useState(false)
  const [otherResultsMonths, setOtherResultsMonths] = useState(0)
  const [otherResultsWeeks, setOtherResultsWeeks] = useState(0)
  const [otherResultsDays, setOtherResultsDays] = useState(0)
  const [otherResultsHours, setOtherResultsHours] = useState(0)
  const [otherResultsMinutes, setOtherResultsMinutes] = useState(0)
  const [otherResultsSeconds, setOtherResultsSeconds] = useState(0)

  const result = (d: any, m: any, y: any) => {
    const current = new Date()
    let currentDate = current.getDate()
    let currentMonth = 1 + current.getMonth()
    let currentYear = current.getFullYear()

    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (d > currentDate) {
      currentDate = currentDate + month[currentMonth - 1]
      currentMonth = currentMonth - 1
    }
    if (m > currentMonth) {
      currentMonth = currentMonth + 12
      currentYear = currentYear - 1
    }
    let finalDate = currentDate - d
    let finalMonth = currentMonth - m
    let finalYear = currentYear - y

    setResultDate(finalDate)
    setResultMonth(finalMonth)
    setResultYear(finalYear)

    getOtherResults(d, m, y)
  }

  const getOtherResults = (day: any, month: any, year: any) => {
    //     let day = dateInput.value
    //     let month = monthInput.value - 1
    //     let year = yearInput.value
    setOtherResults(true)
    const birthday = new Date(year, month, day).getTime()
    const comparisonTimeStamp = new Date().getTime()
    const difference = comparisonTimeStamp - birthday
    const seconds = Math.floor(difference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const weeks = Math.floor(days / 7)
    const years = Math.floor(days / 365.25)
    const months = Math.floor(days / 30.4375)

    setOtherResultsSeconds(seconds)
    setOtherResultsMinutes(minutes)
    setOtherResultsHours(hours)
    setOtherResultsDays(days)
    setOtherResultsWeeks(weeks)
    setOtherResultsMonths(months)
  }

  const handleSubmit = async (value: any) => {
    const { date = '', month = '', year = '' } = value
    if (!date || !month || !year) return
    console.log('submit value=', value)
    result(date, month, year)
  }

  const handleValidate = (value: any = {}) => {
    const error = {}
    return error
  }

  return (
    <AgeBody>
      <Form onSubmit={handleSubmit} validate={handleValidate}>
        {(props) => {
          return (
            <AgeContainer>
              <form onSubmit={props.handleSubmit}>
                <div className="date-input">
                  <div className="date">
                    <p>Date</p>
                    <Field
                      name="date"
                      component="input"
                      type="number"
                      placeholder="11"
                    ></Field>
                  </div>
                  <div className="month">
                    <p>Month</p>
                    <Field
                      name="month"
                      component="input"
                      type="number"
                      placeholder="02"
                    ></Field>
                  </div>
                  <div className="year">
                    <p>Year</p>
                    <Field
                      name="year"
                      component="input"
                      type="number"
                      placeholder="2006"
                    ></Field>
                  </div>
                  <button className="submit-btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
              <div className="result">
                <div className="result-years">
                  <div>{resultYear}</div>
                  <p>Years</p>
                </div>
                <div className="result-months">
                  <div>{resultMonth}</div>
                  <p>Month</p>
                </div>
                <div className="result-days">
                  <div>{resultDate}</div>
                  <p>Days</p>
                </div>
              </div>
              <div className="other-results">
                {otherResults && (
                  <table>
                    <tr>
                      <td>Months old</td>
                      <td>{otherResultsMonths}</td>
                    </tr>
                    <tr>
                      <td>Weeks old</td>
                      <td>{otherResultsWeeks}</td>
                    </tr>
                    <tr>
                      <td>Days old</td>
                      <td>{otherResultsDays}</td>
                    </tr>
                    <tr>
                      <td>Hours old (approx)</td>
                      <td>{otherResultsHours}</td>
                    </tr>
                    <tr>
                      <td>Minutes old (approx)</td>
                      <td>{otherResultsMinutes}</td>
                    </tr>
                    <tr>
                      <td>Second old (approx)</td>
                      <td>{otherResultsSeconds}</td>
                    </tr>
                  </table>
                )}
              </div>
            </AgeContainer>
          )
        }}
      </Form>
    </AgeBody>
  )
}

export default AgeCalculator
