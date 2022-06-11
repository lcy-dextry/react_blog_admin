import React, { memo } from 'react'

// 工具
import { AboutWrapper } from './style';
import { FormOutlined } from '@ant-design/icons'

// 自定义
import Header from 'c/header';

const About = memo(() => {
  return (
    <AboutWrapper className='content'>
      <Header title={<FormOutlined />} link='#' />
    </AboutWrapper>
  )
})

export default About