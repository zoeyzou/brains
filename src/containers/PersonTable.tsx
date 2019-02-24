import * as React from 'react';
import styled from 'styled-components';
import TableHead from '../components/TableHead';
import { Person } from '../models/person';
import { LoadingState } from '../models/loading-state';
import { loadPersons } from '../utils/api';
import Loader from '../components/Loader';
import TableBody from '../components/TableBody';
import { getValueGroupsFromArrayOfObject } from '../utils/helper';

type PersonTableProps = {
  className?: string;
};

type PersonTableState = {
  loadingState: LoadingState;
  persons: Person[] | null;
  errMsg: string | null;
  expandedRowId: number | null;
};

class _PersonTable extends React.Component<PersonTableProps, PersonTableState> {
  constructor(props: PersonTableProps) {
    super(props);

    this.state = {
      loadingState: LoadingState.default,
      persons: null,
      errMsg: null,
      expandedRowId: null,
    };
  }

  componentDidMount() {
    this.setState({ loadingState: LoadingState.pending });
    loadPersons()
      .then(res =>
        this.setState({ persons: res, loadingState: LoadingState.success })
      )
      .catch((err: string) =>
        this.setState({
          errMsg: JSON.stringify(err),
          loadingState: LoadingState.failure,
          persons: [],
        })
      );
  }

  getIds = (): number[] | undefined => {
    if (this.state.persons) {
      return this.state.persons.map(person => person.Id);
    }
  };

  getDataWithoutId = () => {
    const data = getValueGroupsFromArrayOfObject(this.state.persons || []);
    data.forEach(items => {
      items.splice(0, 1);
      items.push('icon');
    });
    return data;
  };

  onRowClick = (rowId: number) => {
    const previousId = this.state.expandedRowId;
    if (rowId === previousId) {
      this.setState({ expandedRowId: null });
    } else {
      this.setState({ expandedRowId: rowId });
    }
  };

  public render() {
    const { className } = this.props;
    const { loadingState, persons, errMsg, expandedRowId } = this.state;

    if (loadingState === LoadingState.pending) {
      return (
        <div className={className}>
          <div className='d-wrapper'>
            <div className='loader'>
              <Loader />
            </div>
          </div>
        </div>
      );
    }

    if (
      loadingState === LoadingState.success &&
      persons &&
      persons.length === 0
    ) {
      return (
        <div className={className}>
          <div className='d-wrapper'>
            <p>It seems like no available data.</p>
          </div>
        </div>
      );
    }

    if (loadingState === LoadingState.failure) {
      return (
        <div className={className}>
          <div className='d-wrapper'>
            <p>{errMsg}</p>
          </div>
        </div>
      );
    }

    return (
      <div className={className}>
        <div className='wrapper'>
          <TableHead
            items={['Name', 'Year Of Birth', 'Children', 'Profession', '']}
            hasIcon={true}
          />
          <TableBody
            data={this.getDataWithoutId()}
            ids={this.getIds()}
            onClick={this.onRowClick}
            expandedId={expandedRowId && expandedRowId}
            hasIcon={true}
          />
        </div>
      </div>
    );
  }
}

const PersonTable = styled(_PersonTable)`
  display: flex;
  height: calc(467 / 667 * 100%);

  .wrapper {
    width: 100%;
    height: 100%;

    .loader {
      width: 100%;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 568px) {
    justify-content: center;
    .wrapper {
      width: calc(1200 / 1920 * 100%);
      margin-top: calc(15px + 1vmin);
    }
  }
`;

export default PersonTable;
