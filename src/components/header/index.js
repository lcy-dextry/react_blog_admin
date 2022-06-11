import React, { memo } from 'react';

// 工具
import { HeaderWrapper } from './style';

// 自定义
import AddBtn from 'c/add-btn';

const Header = memo((props) => {
    const {title, link} = props;
    return (
        <HeaderWrapper>
            <AddBtn
                title={title}
                link={link} />
        </HeaderWrapper>
    )
})

export default Header