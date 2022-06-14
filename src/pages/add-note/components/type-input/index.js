import React, { memo } from 'react';

// 工具
import { Select } from 'antd';

// 自定义
import { noteTypes } from '@/common/local-data';
import { TypeInputWrapper } from './style';

const TypeInput = memo((props) => {
    // 笔记Type  
    const { type, setType } = props;
    const { Option } = Select;

    return (
        <TypeInputWrapper>
            <span>文章类型: </span>
            <Select
                value={type}
                className='type'
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                onChange={value => setType(value)}
            >
                {
                    noteTypes.map(item => {
                        return <Option key={item} value={item}>{item}</Option>
                    })
                }
            </Select>
        </TypeInputWrapper>
    )
})

export default TypeInput;