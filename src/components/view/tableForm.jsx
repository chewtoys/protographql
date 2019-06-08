import React from 'react'
import styled from 'styled-components';
import TableHeader from './tableHeader';
import TableRow from './tableRow';
import Draggable from 'react-draggable';
import TableName from './tableName';

const Div = styled.div`
  border: 1px solid #161e26;
  border-radius: 5px;
  width: 90%;
  height: 400px;
  margin: 20px;
  border-spacing: 0;
  min-width: 450px;
  max-width: 1000px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

function TableForm() {

  return (

    <Div>
      <TableName />
      <Table id='table' >
        <tbody>
          <Draggable>
            <TableHeader />
          </Draggable>
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </Table>
    </Div>

  )
}


export default TableForm;