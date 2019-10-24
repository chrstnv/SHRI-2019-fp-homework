import React from 'react';

const withDisplayInnerCount = WrappedComponent => props => {
  const { children, onClick, decrementCount, color, size } = props;

  return (
    <span style={{'margin-right': '15px'}}>
      <span style={{position: 'absolute'}} >Кликов: {decrementCount}</span>
      <WrappedComponent onClick={onClick} color={color} size={size}>
        {children}
      </WrappedComponent>
    </span>
  );
};

export default withDisplayInnerCount;
