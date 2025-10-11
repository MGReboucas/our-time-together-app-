import React from "react";
import { useState, useEffect } from "react";
import "./TimeCounter.css";

const START_DATE = new Date(2017, 9, 17, 15, 0, 0).getTime();

const calcTimeCounterDifference = (targetDate) => {
  //convert time to miliseconds
  const now = new Date().getTime();
  let difference = now - targetDate;

  if (difference < 0) {
    return {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const startDate = new Date(targetDate);
  const currentDate = new Date(now);

  //comparing year
  let years = currentDate.getFullYear() - startDate.getFullYear();
  
  //comparing Month
  let months = currentDate.getMonth() - startDate.getMonth();

  //comparing Days
  let days = currentDate.getDate() - startDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const msInDay = now % (1000 * 60 * 60 * 24);

  //converting Date with Math.floor
  const hours = Math.floor(msInDay / (1000 * 60 * 60));
  const minutes = Math.floor((msInDay % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((msInDay % (1000 * 60)) / 1000);

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
};

export default function TimeCounter() {
  //pic time and set time
  const [time, setTime] = useState(calcTimeCounterDifference(START_DATE));

  //interval to set the time
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calcTimeCounterDifference(START_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  //format time to string
  const formatTime = (value) => String(value).padStart(2, "0");

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
  );
}
