import {
  PiSmileyLight,
  PiSmileyMehLight,
  PiSmileySadLight,
} from 'react-icons/pi';
import css from './FeedbackOptions.module.css';

const emoji = {
  good: <PiSmileyLight />,
  neutral: <PiSmileyMehLight />,
  bad: <PiSmileySadLight />,
};
const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ul className={css.options_list}>
    {options.map((option) => (
      <li key={option}>
        <button
          className={`${css.option} ${css[option]}`}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
          {emoji[option]}
        </button>
      </li>
    ))}
  </ul>
);


export default FeedbackOptions;


