import { FeedbackBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(item => {
    return (
      <FeedbackBtn type="button" key={item} onClick={onLeaveFeedback}>
        {item}
      </FeedbackBtn>
    );
  });
};

export default FeedbackOptions;
