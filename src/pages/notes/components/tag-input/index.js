import React, { memo } from 'react';

// 工具
import { Select } from 'antd';
import { TagInputWrapper } from './style';

// 自定义
import { noteTags } from '@/common/local-data';

const TagInput = memo((props) => {
    const { Option } = Select;
    const { tags,setTags,searchByTag } = props;

    const onChange = (value) => {
        setTags(value);
        searchByTag(value);
    }

    return (
        <TagInputWrapper>
            <Select
                value={tags}
                className='tag'
                mode="multiple"
                allowClear
                placeholder="请选择文章标签"
                onChange={value => onChange(value)}
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