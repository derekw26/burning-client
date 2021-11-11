import React, { Component } from 'react';
import "./PlaneDisplay.css"

const PlaneDisplay = (props) => {

  const plane = props.planeInfo;

  return (
    <div>
      <ul>
        <li class="list-group-item list-group-item-action active" >
          Name: { plane.name }
        </li>
        <li class="list-group-item list-group-item-action">
          Rows: { plane.rows }
        </li>
        <li class="list-group-item list-group-item-action">
          Columns: { plane.columns }
        </li>
      </ul>
    </div>
  );
}

export default PlaneDisplay;
