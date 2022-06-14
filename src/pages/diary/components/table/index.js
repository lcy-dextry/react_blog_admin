import React, { memo } from 'react';

// 工具
import { TableWrapper } from './style';
import { Table, Button, Popconfirm } from 'antd';

// 样式
import '@/assets/css/deleteConfirm.css';

const DiaryTable = memo((props) => {
  const { data, deleteDiary } = props;

  // 添加key
  if (data) {
    for (let i = 0; i < data.length; i++) {
      data[i].key = i;
    }
  }

  const columns = [
    {
      title: '日记内容',
      dataIndex: 'content',
      key: '_id',
    },
    {
      title: '发布日期',
      dataIndex: 'date',
      key: '_id',
    },
    {
      title: '心情',
      dataIndex: 'feeling',
      key: '_id',
    },
    {
      title: '操作',
      dataIndex: '',
      key: '_id',
      render: (record) => (
        <>
          <Popconfirm
            placement='topRight'
            title='是否删除该日记?'
            onConfirm={() => {
             deleteDiary(record._id);
            }}
            okText='Yes'
            cancelText='No'
          >
            <Button className='btn-1' type='primary' danger>
              删除
            </Button>
          </Popconfirm>
        </>
      )
    },
  ];

  return (
    <TableWrapper>
      <Table
        bordered={true}
        columns={columns}
        pagination={{
          position: ['none', 'bottomCenter'],
          total: data ? data.length : 10
        }}
        dataSource={data}
      />
    </TableWrapper>
  )
})

export default DiaryTable