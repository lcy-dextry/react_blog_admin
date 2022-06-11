import React, { memo } from 'react';

// 工具
import { Select } from 'antd';

// 自定义
import { noteTypes } from '@/common/local-data';
import { TypeInputWrapper } from './style';

const TypeInput = memo(() => {
    // 笔记Type    
    const { Option } = Select;
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    return (
        <TypeInputWrapper>
            <span>文章类型: </span>
            <Select
                className='type'
                showSearch
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
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