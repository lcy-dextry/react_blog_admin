import React, { memo } from 'react';

// 工具
import { Select } from 'antd';

// 自定义
import { noteTypes } from '@/common/local-data';
import { TypeInputWrapper } from './style';

const TypeInput = memo((props) => {
    const { type,setType,searchByType } = props;
    const { Option } = Select;

    const onChange = value => {
        setType(value);
        searchByType(value);
    }

    return (
        <TypeInputWrapper>
            <Select
                value={type}
                className='type'
                showSearch
                optionFilterProp="children"
                onChange={value=>onChange(value)}
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