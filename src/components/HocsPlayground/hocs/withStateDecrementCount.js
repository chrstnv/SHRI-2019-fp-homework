import { withState } from 'recompose';
const withStateDecrementCount = withState('decrementCount', 'decrement', 5);

export default withStateDecrementCount;