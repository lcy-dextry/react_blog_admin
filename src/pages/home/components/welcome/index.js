import React, { memo, useState, useEffect } from 'react';

// 工具
import { WelcomeWrapper } from './style';
import moment from 'moment';
import { quotes } from '@/common/local-data';

const Welcome = memo(() => {
    const [name, setName] = useState('LCY');
    const [greet, setGreet] = useState('');

    useEffect(() => {
        const hour = moment().hours();
        const greeting =
            hour < 9
                ? '早上好'
                : hour < 11
                    ? '上午好'
                    : hour < 13
                        ? '中午好'
                        : hour < 17
                            ? '下午好'
                            : '晚上好';
        setGreet(greeting);
    }, []);

    return (
        <WelcomeWrapper>
            <div className='profile-img' />
            <ul className='text'>
                <li>{`${greet}, `}<span>{`${name} !`}</span></li>
                <li>{quotes}</li>
            </ul>
        </WelcomeWrapper>
    )
})

export default Welcome