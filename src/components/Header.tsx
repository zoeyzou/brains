import * as React from 'react';
import Logo from './Logo';
import styled from '../utils/styled-components';

type HeaderProps = {
  className?: string;
};

const _Header: React.FunctionComponent<HeaderProps> = props => {
  return (
    <div className={props.className}>
      <h1>Brains</h1>
      <Logo width='calc(70px + 4vh)' height='calc(70px + 4vh)' />
    </div>
  );
};

const Header = styled(_Header)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: calc(200 / 667 * 100%);
  background-color: ${({ theme }) => theme.color.white};

  h1 {
    font-size: calc(28px + 1vmin);
    font-family: ${({ theme }) => theme.font.logo};
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.darkgrey};
    margin-bottom: 30px;
    text-shadow: 0 6px 15px rgba(1, 1, 1, 0.16);
    letter-spacing: 2px;
  }

  @media (min-width: 568px) {
    height: calc(220 / 1080 * 100%);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.darkwhite};

    h1 {
      margin-bottom: 0;
      margin-right: 30px;
      font-size: calc(40px + 1vmin);
    }
  }
`;

export default Header;
