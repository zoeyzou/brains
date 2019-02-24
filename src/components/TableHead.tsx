import * as React from 'react';
import TableItem from './TableItem';
import styled from 'styled-components';

interface TableHeadProps {
  className?: string;
  items: string[];
  hasIcon?: boolean;
}

const _TableHead: React.FunctionComponent<TableHeadProps> = ({
  className,
  items,
  hasIcon,
}) => {
  return (
    <TableItem className={hasIcon ? className + ' hasIcon' : className}>
      {items.map(item => (
        <div key={item}>{item}</div>
      ))}
    </TableItem>
  );
};

const TableHead = styled(_TableHead)`
  height: calc(30px + 2vh);
  font-family: ${({ theme }) => theme.font.title};
  background-color: ${({ theme }) => theme.color.darkwhite};
  color: ${({ theme }) => theme.color.darkgrey};
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: bolder;
  letter-spacing: 0.5px;
  text-align: center;

  div:nth-of-type(4),
  div:last-of-type {
    display: inherit;
  }

  &.hasIcon {
    height: calc(35px + 2vh);
    font-size: 1.6rem;

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

export default TableHead;
