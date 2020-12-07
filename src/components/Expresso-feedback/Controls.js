import React from "react";
import PropTypes from "prop-types";

import s from "./Feedback.module.css";

export default function Controls({ options, onLeaveFeedback }) {
  const btnMap = Object.keys(options);
  return (
    <div>
      {btnMap.map((item) => (
        <button
          key={Math.random(3)}
          name={item}
          type="button"
          onClick={onLeaveFeedback}
          className={s.btn}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
}

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
