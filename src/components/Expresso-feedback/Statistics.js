import React from "react";

import Notification from "./Notification"

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      {good || neutral || bad !== 0 ? (
        <ul>
          <li>Добре: {good}</li>
          <li>Нейтрально: {neutral}</li>
          <li>Погано: {bad}</li>
          <li>Загально відгуків: {total} </li>
          <li>Хороших відгуків: {positivePercentage}% </li>
        </ul>
      ) : (
        <Notification message="Наразі відгуки відсутні! :)"/>
      )}
    </div>
  );
}
