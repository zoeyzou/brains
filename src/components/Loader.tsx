import * as React from 'react';
import styled, { keyframes } from '../utils/styled-components';

interface LoaderProps {
  className?: string;
}

const _Loader: React.FunctionComponent<LoaderProps> = (props: LoaderProps) => {
  return <div className={props.className} />;
};

const typing = keyframes`
  0% {
    background-color: rgba(255,255,255, 1);
    box-shadow: 20px 0px 0px 0px rgba(255,255,255,0.2), 40px 0px 0px 0px rgba(255,255,255,0.2);
  }
   
  25% { 
    background-color: rgba(255,255,255, 0.4);
    box-shadow: 20px 0px 0px 0px rgba(255,255,255,2), 40px 0px 0px 0px rgba(255,255,255,0.2);
  }
   
  75% { 
    background-color: rgba(255,255,255, 0.4);
    box-shadow: 20px 0px 0px 0px rgba(255,255,255,0.2), 40px 0px 0px 0px rgba(255,255,255,1);
  }
`;

const Loader = styled(_Loader)`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${typing} 1s linear infinite alternate;
`;

export default Loader;
