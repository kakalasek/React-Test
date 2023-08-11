import React, { useState } from "react";

const Counter = (props) => {
  const getBadgeClasses = () =>
    "badge m-2 badge-" + (props.counter.value === 0 ? "warning" : "primary");

  const formatValue = () =>
    props.counter.value === 0 ? "Zero" : props.counter.value;

  return (
    <div>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
        className="btn btn-secondary btn-sm"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
