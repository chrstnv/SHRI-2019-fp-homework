import { withState } from 'recompose';
const withStateAngle = withState('angle', 'setAngle', 0);

export default withStateAngle;