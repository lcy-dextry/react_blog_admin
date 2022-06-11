import React, { memo } from 'react'

// 工具
import { PictureWrapper } from './style';

// 自定义
import Header from 'c/header';

const Picture = memo(() => {
  return (
    <PictureWrapper className='content'>
      <Header title='添加相册' link='/admin/addGallery'/>
    </PictureWrapper>
  )
})

export default Picture