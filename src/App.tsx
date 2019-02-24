import React, { Component } from 'react';
import { GlobalStyle } from './utils/global-style';
import Header from './components/Header';
import PersonTable from './containers/PersonTable';

type Props = {};

class App extends Component<Props, {}> {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <PersonTable />
      </>
    );
  }
}

export default App;
