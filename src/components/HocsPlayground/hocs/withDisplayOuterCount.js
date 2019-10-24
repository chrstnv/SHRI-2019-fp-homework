import React from 'react';

const withDisplayInnerCount = WrappedComponent => props => {
  const { children, onClick, decrementCount, color, size } = props;

  return (
    <span>
      <div>Кликов: {decrementCount}</div>
      <WrappedComponent onClick={onClick} color={color} size={size}>
        {children}
      </WrappedComponent>
    </span>
  );
};

export default withDisplayInnerCount;
