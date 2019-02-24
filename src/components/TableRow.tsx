import * as React from 'react';
import TableItem from './TableItem';
import styled from 'styled-components';
import TriangleIcon from './TriangleIcon';

type TableRowProps = {
  className?: string;
  items: (string | number)[];
  id?: number;
  onClick?: (id: number) => void;
  isExpanded?: boolean;
};

const _TableRow: React.FunctionComponent<TableRowProps> = ({
  className,
  items,
  id,
  onClick,
  isExpanded,
}) => {
  const clickHandler = () => {
    onClick && id && onClick(id);
  };
  return (
    <TableItem className={className} as='li' onClick={clickHandler}>
      {items.map(item => (
        <div key={item + '_' + id}>
          {item !== 'icon' ? item : <TriangleIcon isFocused={isExpanded} />}
        </div>
      ))}
    </TableItem>
  );
};

_TableRow.defaultProps = {
  isExpanded: false,
};

const TableRow = styled(_TableRow)`
  height: calc(35px + 1vh);
  font-family: ${({ theme }) => theme.font.body};
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.lightgrey};
  text-transform: capitalize;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  text-align: center;
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-in;
    transform: scaleY(1.1);
    font-weight: bolder;
  }

  div:nth-of-type(4),
  div:last-of-type {
    display: none;
  }

  @media (min-width: 900px) {
    div:nth-of-type(4),
    div:last-of-type {
      display: inherit;
    }

    div:last-of-type {
      flex: 0 0 50px;
    }
  }
`;

export default TableRow;
