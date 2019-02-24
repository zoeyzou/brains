import styled from '../utils/styled-components';

const TableItem = styled.div`
  display: flex;
  padding-left: calc(5px + 3vmin);
  padding-right: calc(5px + 3vmin);

  & > * {
    flex: 1 1 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default TableItem;
