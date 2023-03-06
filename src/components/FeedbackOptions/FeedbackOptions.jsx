export const FeedBackOptions = ({
  onGoodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => (
  <>
    <button type="button" onClick={onGoodIncrement}>
      Good
    </button>
    <button type="button" onClick={onNeutralIncrement}>
      Neutral
    </button>
    <button type="button" onClick={onBadIncrement}>
      Bad
    </button>
  </>
);
