/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import {compose} from 'recompose';
import BaseButton from './BaseButton';
import withSmallSize from '../hocs/withSmallSize';
import withDefaultColor from '../hocs/withDefaultColor';
import withStateDecrementCount from '../hocs/withStateDecrementCount';
import withDisplayOuterCount from '../hocs/withDisplayOuterCount';
import withOnClickDecrementAndSetColor from '../hocs/withOnClickDecrementAndSetColor';

export default compose(
  withStateDecrementCount,
  withOnClickDecrementAndSetColor,
  withSmallSize,
  withDefaultColor,
  withDisplayOuterCount
)(BaseButton)
