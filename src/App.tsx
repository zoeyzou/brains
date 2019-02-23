import React, { Component } from 'react';
import { GlobalStyle } from './utils/global-style';
import { loadPersons } from './utils/api';
import { Person } from './models/person';

type Props = {};

type State = {
  isLoadingPersons: boolean;
  allPersons: Person[] | null;
  errorMsg: string | undefined;
};

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoadingPersons: false,
      allPersons: null,
      errorMsg: undefined,
    };
  }

  componentDidMount() {
    this.setState({ isLoadingPersons: true });
    loadPersons()
      .then(res => this.setState({ allPersons: res }))
      .catch((err: string) => this.setState({ errorMsg: err }));
    this.setState({ isLoadingPersons: false });
  }

  render() {
    return (
      <>
        <GlobalStyle />
      </>
    );
  }
}

export default App;
