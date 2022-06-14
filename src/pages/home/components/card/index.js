import React, { memo } from 'react';
import { CardWrapper } from './style';

// 工具

const Card = memo((props) => {
    const { Count, title } = props;
    return (
        <CardWrapper>
            <div className='title'>{`${title}数`}</div>
            {Count}
        </CardWrapper>
    )
})

export default Card