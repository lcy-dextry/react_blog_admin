import React, { memo } from 'react';
import { NavBarWrapper } from './style';
import { NavLink } from 'react-router-dom';

// 工具
import { navLinks } from '@/common/local-data';

const NavBar = memo(() => {
  return (
    <NavBarWrapper>
      <div className='title'>LCY 工 具 箱</div>
      <ul className='nav-bar'>
        {
          navLinks.map(item => {
            return <NavLink key={item.title} to={item.link}>{item.title}</NavLink>
          })
        }
      </ul>
    </NavBarWrapper>
  )
})

export default NavBar