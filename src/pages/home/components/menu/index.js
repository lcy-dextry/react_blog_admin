import React, { memo, useEffect, useState } from 'react';

// 工具
import moment from 'moment';
import { MenuWrapper } from './style';
import { menu } from '@/common/local-data';

const Menu = memo(() => {
    const randomDish = () => {
        let min = 0;
        let max = menu.length;
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return menu[num];
    }

    return (
        <MenuWrapper>
            <div className='current-date'>{moment().format('YYYY-MM-DD')}</div>
            <div className='menu'>
                <span>今天吃什么: </span>
                <span>{randomDish()}</span>
            </div>
        </MenuWrapper>
    )
})

export default Menu