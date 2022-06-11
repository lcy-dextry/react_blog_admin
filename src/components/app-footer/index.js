import React, { memo } from 'react';

// 工具
import { AppFooterWrapper } from './style';
import { githubURL } from '@/common/local-data';

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper className='wrap-v2'>
      <div className='title'>工具箱后台管理系统</div>
      <div className='code'>
        <span>源代码</span>
        <a href={ githubURL}>「Github」</a>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter