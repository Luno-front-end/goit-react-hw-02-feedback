import React from "react";

export default function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (<div> 
        <p>Добре: {good}</p>
          <p>Нейтрально: { neutral}</p>
          <p>Погано: {bad}</p>
          <p>Загально відгуків: {total} </p>
          <p>Хороших відгуків: {positivePercentage}% </p>
    </div>)
}