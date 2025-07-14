import React from 'react';

const withDashBoard = <P extends object>(
  Components: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    const action = {};
    return <Components {...action} {...props} />;
  };
};

export default withDashBoard;
