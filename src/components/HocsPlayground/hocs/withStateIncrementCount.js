import { withState } from 'recompose';
const withStateIncrementCount = withState('incrementCount', 'increment', 0);

export default withStateIncrementCount;
