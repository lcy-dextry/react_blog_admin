import React, { memo } from 'react';

// 工具
import {TableWrapper} from './style';
import { Table } from 'antd';

const Table = memo(() => {
  return (
    <TableWrapper>
        <Table columns={columns} dataSource={data} onChange={onChange} />
    </TableWrapper>
  )
})

export default Table