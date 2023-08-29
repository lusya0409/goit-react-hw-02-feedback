export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          // onLeaveFeedback('good');
          options.good += 1;
          onLeaveFeedback(options);
        }}
      >
        Good
      </button>
      <button
        type="button"
        onClick={() => {
          //onLeaveFeedback('neutral');
          options.neutral += 1;
          onLeaveFeedback(options);
        }}
      >
        Neutral
      </button>
      <button
        type="button"
        onClick={() => {
          //onLeaveFeedback('bad');
          options.bad += 1;
          onLeaveFeedback(options);
        }}
      >
        Bad
      </button>
    </div>
  );
};
