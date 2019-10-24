import { withHandlers } from 'recompose';

const colors = {
  1: 'red',
  2: 'blue',
  3: 'green',
  4: 'grey',
  5: 'orange',
  6: 'fuchsia',
  7: 'purple',
  8: 'aqua',
  9: 'gold',
  0: 'darkcyan'
}

export default withHandlers({
  onClick: ({
    angle,
    setOuterColor,
    setInnerColor,
    setAngle
  }) => e => {
    e.preventDefault();

    if (angle === -330) {
      setOuterColor(colors[Math.floor(Math.random() * 10)]);
      setInnerColor(colors[Math.floor(Math.random() * 10)]);
    }
    setAngle(angle === -330 ? angle = 0 : angle -= 30);
  }
});
