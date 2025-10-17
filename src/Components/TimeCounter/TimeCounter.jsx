import React from 'react'
import { useState, useEffect } from 'react'
import './TimeCounter.css'

const START_DATE = new Date('October 17, 2017 15:00:00 GMT-0300').getTime()

const calcTimeCounterDifference = () => {
  const startDate = START_DATE
  const timeZoneOffset = -3 * 60

  const now = new Date()

  const localNow = new Date(
    now.getTime() + (now.getTimezoneOffset() + timeZoneOffset) * 60000,
  )

  const differenceInMS = localNow - startDate

  const MS_IN_SECOND = 1000
  const MS_IN_MINUTE = MS_IN_SECOND * 60
  const MS_IN_HOUR = MS_IN_MINUTE * 60
  const MS_IN_DAY = MS_IN_HOUR * 24
  const MS_IN_YEAR = MS_IN_DAY * 365.25
  const MS_IN_MONTH = MS_IN_DAY * 30.44

  const years = Math.floor(differenceInMS / MS_IN_YEAR)
  const months = Math.floor((differenceInMS % MS_IN_YEAR) / MS_IN_MONTH)
  const days = Math.floor((differenceInMS % MS_IN_MONTH) / MS_IN_DAY)
  const hours = Math.floor((differenceInMS % MS_IN_DAY) / MS_IN_HOUR)
  const minutes = Math.floor((differenceInMS % MS_IN_HOUR) / MS_IN_MINUTE)
  const seconds = Math.floor((differenceInMS % MS_IN_MINUTE) / MS_IN_SECOND)

  return {
    years: years,
    months: months,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

export default function TimeCounter() {
  //pic time and set time
  const [time, setTime] = useState(calcTimeCounterDifference(START_DATE))

  //interval to set the time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calcTimeCounterDifference(START_DATE))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  //format time to string
  const formatTime = value => String(value).padStart(2, '0')

  return (
    <div className="time-counter-everybody">
      <div className="time-counter-texts">
        <h3 className="time-counter-title">O Amor em Números!</h3>
        <p className="time-counter-subtitle">
          Cada segundo é uma prova de que fomos feitos para ser eternidade.
        </p>
      </div>
      <div className="time-counter-container">
        <div className="counter-grid">
          <div className="time-block">
            <span className="time-value">{time.years}</span>
            <span className="time-unit">anos</span>
          </div>

          <div className="time-block">
            <span className="time-value">{time.months}</span>
            <span className="time-unit">meses</span>
          </div>

          <div className="time-block">
            <span className="time-value">{time.days}</span>
            <span className="time-unit">dias</span>
          </div>
        </div>

        <div className="counter-grid">
          <div className="time-block">
            <span className="time-value">{formatTime(time.hours)}</span>
            <span className="time-unit">horas</span>
          </div>

          <div className="time-block">
            <span className="time-value">{formatTime(time.minutes)}</span>
            <span className="time-unit">minutos</span>
          </div>

          <div className="time-block">
            <span className="time-value">{formatTime(time.seconds)}</span>
            <span className="time-unit">segundos</span>
          </div>
        </div>
      </div>
    </div>
  )
}
