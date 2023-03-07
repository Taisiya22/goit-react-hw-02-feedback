import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedBackOptions = ({
  onGoodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => (
  <div className={css.wrapper}>
    <button type="button" onClick={onGoodIncrement}>
      Good
    </button>
    <button type="button" onClick={onNeutralIncrement}>
      Neutral
    </button>
    <button type="button" onClick={onBadIncrement}>
      Bad
    </button>
  </div>
);

FeedBackOptions.propTypes = {
  onGoodIncrement: PropTypes.func.isRequired,
  onNeutralIncrement: PropTypes.func.isRequired,
  onBadIncrement: PropTypes.func.isRequired,
};
