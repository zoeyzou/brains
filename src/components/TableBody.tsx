import * as React from 'react';
import TableRow from './TableRow';
import styled from 'styled-components';

type TableBodyProps = {
  className?: string;
  data: Array<Array<string | number>>;
  ids?: number[] | undefined;
  onClick?: (id: number) => void;
};

const _TableBody: React.FunctionComponent<TableBodyProps> = ({
  className,
  data,
  ids,
  onClick,
}) => {
  return (
    <div className={className}>
      <ul>
        {data.map((item, index) => (
          <TableRow
            key={ids ? ids[index] : index}
            id={ids && ids[index]}
            items={item}
            onClick={onClick}
          />
        ))}
      </ul>
      <p className='endpage'>End of page</p>
    </div>
  );
};

const TableBody = styled(_TableBody)`
  height: calc(100% - calc(55 / 667 * 100%));
  background-color: ${({ theme }) => theme.color.darkgrey};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    li:nth-of-type(even) {
      background-color: ${({ theme }) => theme.color.darkwhite};
      color: ${({ theme }) => theme.color.grey};
    }
  }

  .endpage {
    color: ${({ theme }) => theme.color.darkwhite};
    font-family: ${({ theme }) => theme.font.title};
    text-transform: uppercase;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 15px;
    margin: 0 auto;
  }
`;

export default TableBody;
