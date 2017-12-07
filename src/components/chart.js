import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return (
    <div>
      <Sparklines data={props.data} margin={0}>
        <SparklinesLine color={props.color}  />
        <SparklinesReferenceLine type="avg"/>
      </Sparklines>
      <h5>{average(props.data)}{props.unit}</h5>
    </div>
  );
}