import { useEffect, useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);
  const handleGoodFeedback = () => {
    setGood(good + 1);
    countTotalFeedback();
  };
  const handleBadFeedback = () => {
    setBad(bad + 1);
    countTotalFeedback();
  };
  const handleNeutralFeedback = () => {
    setNeutral(neutral + 1);
    countTotalFeedback();
  };
  const countPos = () => {
    if (total > 0) {
      setPositive(Math.round((good / total) * 100));
    } else {
      setPositive(0);
    }
  };
  const countTotalFeedback = () => {
    setTotal(total + 1);
    countPos();
  };

  useEffect(() => {
    countPos();
  });

  return (
    <div>
      <Section title="leave your feedback">
        <FeedbackOptions
          fnGood={handleGoodFeedback}
          fnBad={handleBadFeedback}
          fnNeutral={handleNeutralFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          bad={bad}
          total={total}
          neutral={neutral}
          pos={positive}
        />
      </Section>
    </div>
  );
};
