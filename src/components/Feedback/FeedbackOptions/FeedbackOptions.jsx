import { FeedbackBtn } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  const keys = Object.keys(options);
  return (
    <>
      {keys.map((key) => (
        <FeedbackBtn
          type="button"
          key={key}
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key}
        </FeedbackBtn>
      ))}
    </>
  );
};

export default FeedbackOptions;
