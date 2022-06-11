import React, { memo } from 'react'

// 工具
import { HeaderWrapper, NotesWrapper } from './style';
import { Button, Input } from 'antd';
import { RedoOutlined } from '@ant-design/icons';

// 自定义
import TypeInput from './components/type-input';
import TagInput from './components/tag-input';
import AddBtn from 'c/add-btn';

const Notes = memo(() => {
  return (
    <NotesWrapper className='content'>
      <HeaderWrapper>
        <AddBtn
          title='添加笔记'
          link='/admin/addNote' />
        <Input
          className='input-1'
          defaultValue="输入文章标题..."
          onClick={e => e.target.value = ''} />
        <TypeInput />
        <TagInput />
        <Button className='reset'><RedoOutlined /></Button>
      </HeaderWrapper>
      
    </NotesWrapper>
  )
})

export default Notes