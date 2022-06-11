import React, { memo } from 'react';

// 工具
import { MessageWrapper } from './style';

// 自定义
import Header from 'c/header';

const Message = memo(() => {
  return (
    <MessageWrapper className='content'>
      <Header title='添加说说' link='/admin/addMsg' />
    </MessageWrapper>
  )
})

export default Message