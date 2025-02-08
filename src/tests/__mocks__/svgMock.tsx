import React from 'react';

// eslint-disable-next-line
interface SvgMockProps extends React.SVGAttributes<SVGElement> {}

const MockSvg: React.FC<SvgMockProps> = ({ style, ...props }) => {
  return <svg data-testid="svg-mock" {...props} style={style} />;
};

export default MockSvg;
