import React from 'react';

const withDisplayInnerCount = WrappedComponent => props => {
  const { children, onClick, incrementCount, color, size } = props;

  return (
    <WrappedComponent onClick={onClick} color={color} size={size}>
      <span>Кликов: {incrementCount}</span>
      &nbsp;
      {children}
    </WrappedComponent>
  );
};

export default withDisplayInnerCount;
