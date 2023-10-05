import { StatisticText } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <StatisticText>Good: {good}</StatisticText>
      <StatisticText>Neutral: {neutral}</StatisticText>
      <StatisticText>Bad: {bad}</StatisticText>
      <StatisticText>Total: {total}</StatisticText>
      <StatisticText>Positive feedback: {positivePercentage}%</StatisticText>
    </>
  );
};

export default Statistics;
