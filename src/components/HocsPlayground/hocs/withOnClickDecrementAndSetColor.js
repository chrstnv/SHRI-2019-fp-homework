import { withHandlers } from "recompose";

export default withHandlers({
  onClick: ({ decrement, setOuterColor, setInnerColor, decrementCount }) => (e) => {
    e.preventDefault();

    decrement(decrementCount === 0 ? 5 : --decrementCount);

    if (decrementCount === 0) {
      setOuterColor('orange');
      setInnerColor( 'orange');
    }
  }
});