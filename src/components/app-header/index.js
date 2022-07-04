import React, { memo } from 'react'

// 自定义

// 工具
import { HomeOutlined } from '@ant-design/icons';
import { AppHeaderWrapper } from './style';
import { blogUrl } from '@/common/local-data'

const AppHeader = memo(() => {
  return (
    <AppHeaderWrapper className='wrap-v2'>
      <a href={blogUrl} className='to-blog'>
        <HomeOutlined style={{ color: '#1DA57A', fontSize: '26px' }}/>
      </a>
    </AppHeaderWrapper>
  )
})

export default AppHeader