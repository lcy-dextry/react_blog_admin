import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

// 工具
import { BlogStatusWrapper, HeaderWrapper, HomeWrapper } from './style'
import { blogStatus } from '@/common/local-data';

// 自定义
import Welcome from './components/welcome';
import Menu from './components/menu';
import Notice from './components/notice';
import Card from './components/card';
import BlogTypeCount from './components/count';

const Home = memo(() => {
  return (
    <HomeWrapper className='content'>
      <HeaderWrapper>
        <Welcome />
        <Menu />
        <Notice />
      </HeaderWrapper>

      <BlogStatusWrapper>
        {
          blogStatus.map(item => {
            return (
              <NavLink to={item.link}>
                <Card title={item.title}
                    Count={<BlogTypeCount type={item.title} />} />
              </NavLink>
            )
          })
        }
      </BlogStatusWrapper>
    </HomeWrapper>
  )
})

export default Home