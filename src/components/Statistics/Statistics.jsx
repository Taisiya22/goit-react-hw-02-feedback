import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={css.wrapper}>
    <p>Good: {good} </p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </div>
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    // total: PropTypes.number.isRequired,
    // positivePercentag: PropTypes.number,
   
}
