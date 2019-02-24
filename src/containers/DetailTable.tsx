import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import TableHead from '../components/TableHead';
import { LoadingState } from '../models/loading-state';
import { loadPersonDetails } from '../utils/api';
import Loader from '../components/Loader';
import TableBody from '../components/TableBody';
import { PersonDetail } from '../models/person-detail';
import { getValueGroupsFromArrayOfObject } from '../utils/helper';

type DetailTableProps = {
  className?: string;
  id: number;
};

type DetailTableState = {
  loadingState: LoadingState;
  details: PersonDetail[] | null;
  errMsg: string | null;
};

class _DetailTable extends React.Component<DetailTableProps, DetailTableState> {
  constructor(props: DetailTableProps) {
    super(props);

    this.state = {
      loadingState: LoadingState.default,
      details: null,
      errMsg: null,
    };
  }

  componentDidMount() {
    this.setState({ loadingState: LoadingState.pending });
    loadPersonDetails(this.props.id)
      .then(res =>
        this.setState({ details: res, loadingState: LoadingState.success })
      )
      .catch((err: string) =>
        this.setState({
          errMsg: JSON.stringify(err),
          loadingState: LoadingState.failure,
          details: [],
        })
      );
  }

  public render() {
    const { className } = this.props;
    const { loadingState, details, errMsg } = this.state;

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
      details &&
      details.length === 0
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
        <div className='d-wrapper'>
          <TableHead items={['Name', 'Year Of Birth', 'Mother']} />
          <TableBody
            data={getValueGroupsFromArrayOfObject(this.state.details || [])}
          />
        </div>
      </div>
    );
  }
}

const expand = keyframes`
  from {
    height: 0;
  }
`;

const DetailTable = styled(_DetailTable)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(150px + 5vh);
  animation: ${expand} 0.3s linear;
  background-color: ${({ theme }) => theme.color.lightgrey};

  .d-wrapper {
    width: 90%;

    .loader {
      width: 100%;
      height: 100px;
      margin-top: 20px;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 568px) {
    filter: brightness(95%);
    justify-content: center;
    .wrapper {
      width: calc(200px + 3vh);
    }
  }
`;

export default DetailTable;
