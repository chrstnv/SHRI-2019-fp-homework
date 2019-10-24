import { withHandlers } from "recompose";

export default withHandlers({
  onClick: ({ increment, setOuterColor, setInnerColor, incrementCount }) => (e) => {
    e.preventDefault();

    increment(++incrementCount);
    setOuterColor(incrementCount % 2 === 0 ? 'grey' : 'green');
    setInnerColor(incrementCount % 2 === 0 ? 'grey' : 'green');
  }
});