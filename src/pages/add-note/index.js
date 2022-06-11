import React, { memo } from 'react';

// 工具
import { Input, Button } from 'antd';
import { AddNoteWrapper, ContentWrapper, HeaderWrapper } from './style'

// 自定义
import TypeInput from './components/type-input';
import TagInput from './components/tag-input';
import DateSelector from './components/date-selector';

const AddNote = memo(() => {
  return (
    <AddNoteWrapper className='content'>
      <HeaderWrapper>
        <div className='title-input'>
          <Input
            className='input-1'
            defaultValue="请输入文章标题..."
            onClick={e => e.target.value = ''} />
          <Input
            className='input-2'
            defaultValue="请输入英文标题..."
            onClick={e => e.target.value = ''} />
          <Button className='btn-1'>存为草稿</Button>
          <Button className='btn-2'>发布文章</Button>
        </div>

        <div className='title-intro'>
          <TypeInput />
          <TagInput />
          <DateSelector />
        </div>
      </HeaderWrapper>
      <ContentWrapper>
        <Input.TextArea className='textarea' />
      </ContentWrapper>
    </AddNoteWrapper>
  )
})

export default AddNote