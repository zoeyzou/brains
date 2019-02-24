import * as React from 'react';
import styled, { keyframes } from '../utils/styled-components';

interface LoaderProps {
  className?: string;
  loaderTheme?: 'dark' | 'light';
}

const _Loader: React.FunctionComponent<LoaderProps> = (props: LoaderProps) => {
  return <div className={props.className} />;
};

_Loader.defaultProps = {
  loaderTheme: 'dark',
};

const darkThemeColor = [
  'rgba(255, 255, 255, .2)',
  'rgba(255, 255, 255, .4)',
  'rgba(255, 255, 255, 1)',
];
const lightThemeColor = [
  'rgba(0, 0, 0, .2)',
  'rgba(0, 0, 0, .4)',
  'rgba(0, 0, 0, 1)',
];

const typing = (theme: 'dark' | 'light' | undefined) => keyframes`
  0% {
    background-color: ${
      theme === 'dark' ? darkThemeColor[2] : lightThemeColor[2]
    };
    box-shadow: 20px 0px 0px 0px ${
      theme === 'dark' ? darkThemeColor[0] : lightThemeColor[0]
    }, 40px 0px 0px 0px ${
  theme === 'dark' ? darkThemeColor[0] : lightThemeColor[0]
};
  }
   
  25% { 
    background-color: ${
      theme === 'dark' ? darkThemeColor[1] : lightThemeColor[1]
    };
    box-shadow: 20px 0px 0px 0px ${
      theme === 'dark' ? darkThemeColor[2] : lightThemeColor[2]
    }, ${theme === 'dark' ? darkThemeColor[0] : lightThemeColor[0]};
  }
   
  75% { 
    background-color: ${
      theme === 'dark' ? darkThemeColor[1] : lightThemeColor[1]
    };
    box-shadow: 20px 0px 0px 0px ${
      theme === 'dark' ? darkThemeColor[0] : lightThemeColor[0]
    }, 40px 0px 0px 0px ${
  theme === 'dark' ? darkThemeColor[2] : lightThemeColor[2]
};
  }
`;

const Loader = styled(_Loader)`
  width: 10px;
  height: 10px;
  margin-left: -20px;
  border-radius: 50%;
  animation: ${({ loaderTheme }) => typing(loaderTheme)} 1s linear infinite
    alternate;
`;

export default Loader;
