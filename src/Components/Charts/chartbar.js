import React from "react";
import "./chartBar.css";
const Chartbar = (props) => {
  let barFillHeight = "0%";
  console.log(props.value, props.maxValue, "props");
  /*if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }*/
  return (
    <div className='chartBar'>
      <div className='chartBar__Info'>
        <div className='chartBar__fill' style={{ height: barFillHeight }}></div>
        <div>
          <input type='range' />
        </div>
        <div className='chartBar__label'>{props.label}</div>
      </div>
    </div>
  );
};

export default Chartbar;
