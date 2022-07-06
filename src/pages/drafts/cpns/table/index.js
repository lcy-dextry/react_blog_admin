import React, { memo } from 'react';

// 工具
import { TableWrapper } from './style';
import { Table, Tag, Button, Popconfirm } from 'antd';
import MyButton from 'c/jump-button';

// 样式
import '@/assets/css/deleteConfirm.css';

const NotesTable = memo((props) => {
  const { data, deleteNote } = props;
  // 添加key
  if (data) {
    for (let i = 0; i < data.length; i++) {
      data[i].key = i;
    }
  }

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: '_id',
    },
    {
      title: '发布日期',
      dataIndex: 'date',
      key: '_id',
    },
    {
      title: '分类',
      dataIndex: 'type',
      key: '_id',
      render: (text) => (
        <div className='type'>{text}</div>
      )
    },
    {
      title: '标签',
      key: '_id',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 2 ? 'geekblue' : 'green';

            if (tag === 'loser') {
              color = 'volcano';
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      dataIndex: '',
      key: '_id',
      render: (record) => (
        <>
          <Popconfirm
            placement='topRight'
            title='是否删除该草稿?'
            onConfirm={() => {
              deleteNote(record._id);
            }}
            okText='Yes'
            cancelText='No'
          >
            <Button className='btn-1' type='primary' danger>
              删除
            </Button>
          </Popconfirm>
          <MyButton url={`/admin/addDraft?id=${record._id}`} text={'修改'} />
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

export default NotesTable