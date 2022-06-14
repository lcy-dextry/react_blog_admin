import React, { memo } from 'react';

// 工具
import { DatePicker } from 'antd';
import { DateWrapper } from './style';

const DateSelector = memo((props) => {
    const { setDate } = props;

    return (
        <DateWrapper>
            <span>时间: </span>
            <DatePicker
                className='date-selector'
                placeholder=''
                onChange={(date, dateString) => setDate(dateString)} />
        </DateWrapper>
    )
})

export default DateSelector