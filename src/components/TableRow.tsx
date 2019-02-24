import * as React from 'react';
import TableItem from './TableItem';
import styled from 'styled-components';
import TriangleIcon from './TriangleIcon';
import DetailTable from '../containers/DetailTable';

type TableRowProps = {
  className?: string;
  items: (string | number)[];
  id?: number;
  onClick?: (id: number) => void;
  isExpanded?: boolean;
  hasIcon?: boolean;
};

const _TableRow: React.FunctionComponent<TableRowProps> = ({
  className,
  items,
  id,
  onClick,
  isExpanded,
  hasIcon,
}) => {
  const clickHandler = () => {
    console.log('clicked' + id);
    onClick && id && onClick(id);
  };
  return (
    <>
      <TableItem
        className={hasIcon ? className + ' hasIcon' : className}
        as='li'
        onClick={clickHandler}
      >
        {items.map((item, index) => (
          <div key={item + '_' + id}>
            {hasIcon && index === items.length - 1 ? (
              <TriangleIcon isFocused={isExpanded} />
            ) : (
              item
            )}
          </div>
        ))}
      </TableItem>
      {isExpanded && id && <DetailTable id={id} />}
    </>
  );
};

_TableRow.defaultProps = {
  isExpanded: false,
  hasIcon: false,
};

const TableRow = styled(_TableRow)`
  height: calc(30px + 1vh);
  font-family: ${({ theme }) => theme.font.body};
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.lightgrey};
  text-transform: capitalize;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  text-align: center;
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-in;
    transform: scaleY(1.1);
    font-weight: bolder;
  }

  div:last-of-type {
    display: inherit;
  }

  &.hasIcon {
    height: calc(35px + 1vh);
    font-size: 1.4rem;

    div:nth-of-type(4),
    div:last-of-type {
      display: none;
    }
  }

  @media (min-width: 900px) {
    &.hasIcon {
      div:nth-of-type(4),
      div:last-of-type {
        display: inherit;
      }

      div:last-of-type {
        flex: 0 0 50px;
      }
    }
  }
`;

export default TableRow;
