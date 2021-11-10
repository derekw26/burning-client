import React, { Component } from 'react';

const PlaneDisplay = (props) => {

  const plane = props.planeInfo;

  return (
    <div>
      <ul>
        <li>
          Name: { plane.name }
        </li>
        <li>
          Rows: { plane.rows }
        </li>
        <li>
          Columns: { plane.columns }
        </li>
      </ul>
    </div>
  );
}

export default PlaneDisplay;
