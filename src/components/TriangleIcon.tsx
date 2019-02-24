import * as React from 'react';
import styled from 'styled-components';

type TriangleIconProps = {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
  isFocused?: boolean;
};

const _TriangleIcon: React.FunctionComponent<TriangleIconProps> = ({
  className,
  color,
  width,
  height,
  isFocused,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 44 44'
      version='1.1'
      className={isFocused ? className + ' isFocused' : className}
      width={width}
      height={height}
      x='0px'
      y='0px'
    >
      <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g transform='translate(-447.000000, -146.000000)'>
          <path
            d='M467.662327,172.513697 C468.401104,173.334559 469.60449,173.328344 470.337673,172.513697 L476.662327,165.486303 C477.401104,164.665441 477.107377,164 476.004911,164 L461.995089,164 C460.893232,164 460.60449,164.671656 461.337673,165.486303 L467.662327,172.513697 L467.662327,172.513697 Z'
            fill='#000000'
          />
        </g>
      </g>
    </svg>
  );
};

_TriangleIcon.defaultProps = {
  width: '30px',
  height: '30px',
  isFocused: false,
};

const TriangleIcon = styled(_TriangleIcon)`
  transition: all 0.2s ease-in;

  path {
    fill: ${({ theme, color }) => color || theme.color.blue};
  }

  &:hover {
    transition: all 0.2s ease-in;
    transform: scale(1.1);
  }

  &.isFocused {
    transition: all 0.2s ease-in;
    transform: rotate(180deg);
  }
`;

export default TriangleIcon;
