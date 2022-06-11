import React, { memo } from 'react';

// 工具
import { Select } from 'antd';
import { TagInputWrapper } from './style';

// 自定义
import { noteTags } from '@/common/local-data';

const TagInput = memo(() => {
    const { Option } = Select;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <TagInputWrapper>
            <Select
                className='tag'
                mode="multiple"
                allowClear
                placeholder="请选择文章标签"
                onChange={handleChange}
            >
                {
                    noteTags.map(item => {
                        return <Option key={item}>{item}</Option>
                    })
                }
            </Select>
        </TagInputWrapper>
    )
})

export default TagInput