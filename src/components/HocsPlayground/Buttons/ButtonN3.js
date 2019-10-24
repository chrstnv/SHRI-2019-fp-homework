/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose } from 'recompose';
import BaseButton from './BaseButton';
import withSmallSize from '../hocs/withSmallSize';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withStateIncrementCount from '../hocs/withStateIncrementCount';
import withOnClickIncrementAndSetColor from '../hocs/withOnClickIncrementAndSetColor';
import withDisplayInnerCount from '../hocs/withDisplayInnerCount';

export default compose(
  withStateIncrementCount,
  withOnClickIncrementAndSetColor,
  withSmallSize,
  withPrimaryColor,
  withDisplayInnerCount
)(BaseButton);
