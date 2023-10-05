import { useState } from 'react';

import FeedbackOptions from './components/Feedback/FeedbackOptions/FeedbackOptions';
import Section from './components/Feedback/Section/Section';
import Notification from './components/Feedback/Notification/Notification';
import { FeedbackContainer } from './App.styled';
import Statistics from 'components/Feedback/Statistics/Statistics';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : Number(((good / countTotalFeedback()) * 100).toFixed(0));
  };

  const updateFeedback = e => {
    switch (e.target.textContent) {
      case 'good':
        setGood(() => good + 1);
        break;
      case 'neutral':
        setNeutral(() => neutral + 1);
        break;
      case 'bad':
        setBad(() => bad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={updateFeedback} />
      </Section>
      {countTotalFeedback() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </FeedbackContainer>
  );
}
