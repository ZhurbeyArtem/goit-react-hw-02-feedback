import React from 'react';
import { P } from '../styles/p';

const Statistics = ({ good, bad, neutral, total, pos }) => {
  return (
    <div>
      <P>Good: {good}</P>
      <P>Bad: {bad}</P>
      <P>Neutral: {neutral}</P>
      <P>Total: { total }</P>
      <P>Positive feedback: { pos }%</P>
    </div>
  );
};

export default Statistics;
