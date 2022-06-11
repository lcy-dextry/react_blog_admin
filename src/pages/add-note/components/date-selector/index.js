import React, { memo } from 'react';

// 工具
import { DatePicker } from 'antd';
import { DateWrapper } from './style';

const DateSelector = memo(() => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <DateWrapper>
            <span>时间: </span>
            <DatePicker
                className='date-selector'
                placeholder = ''
                onChange={onChange} />
        </DateWrapper>
    )
})

export default DateSelector