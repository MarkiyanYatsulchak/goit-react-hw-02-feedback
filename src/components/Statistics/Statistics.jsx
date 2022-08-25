import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  firstLetterLarge,
}) {
  const feedback = {
    good,
    neutral,
    bad,
  };

  const feedbackTypes = Object.keys(feedback);

  return (
    <div className={styles.text}>
      <div className={styles.feedbackList}>
        {feedbackTypes.map(data => (
          <p key={data} className={styles.feedbackWrapper}>
            {firstLetterLarge(data)}

            <span className={styles.feedbackCount}>{feedback[data]}</span>
          </p>
        ))}
      </div>
      <div>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  firstLetterLarge: PropTypes.func.isRequired,
};

export default Statistics;
