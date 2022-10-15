import React from 'react';
import { Feedback, Number } from './Statistics.styled.jsx';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <Feedback>
        Good:<Number>{good}</Number>
      </Feedback>
      <Feedback>
        Neutral:<Number>{neutral}</Number>
      </Feedback>
      <Feedback>
        Bad:<Number>{bad}</Number>
      </Feedback>
      <Feedback>
        Total:<Number>{total}</Number>
      </Feedback>
      <Feedback>
        Positive:<Number>{positivePercentage}</Number>
      </Feedback>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
export default Statistics;
