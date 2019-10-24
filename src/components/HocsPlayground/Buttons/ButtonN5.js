/**
 * Необходимо имплементировать компонент и его логику путем композиции хоков и stateless компонента BaseButton
 */
import { compose } from 'recompose';
import BaseButton from './BaseButton';
import withPrimaryColor from '../hocs/withPrimaryColor';
import withLargeSize from '../hocs/withLargeSize';
import withStateAngle from '../hocs/withStateAngle';
import withOnClickRotateAndSetColor from '../hocs/withOnClickRotateAndSetColor';

export default compose(
  withStateAngle,
  withPrimaryColor,
  withLargeSize,
  withOnClickRotateAndSetColor
)(BaseButton);
