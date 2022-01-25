import React from "react";
import Chartbar from "./chartbar";
const Chart = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className='chart'>
      {props.dataPoint.map((dataPoint) => (
        <Chartbar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
