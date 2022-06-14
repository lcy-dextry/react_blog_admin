import React, { memo } from 'react';

// 工具
import { NoticeWrapper } from './style';
import { notice } from '@/common/local-data';

const Notice = memo(() => {
    return (
        <NoticeWrapper>
            <div className='notice'>{notice}</div>
        </NoticeWrapper>
    )
})

export default Notice