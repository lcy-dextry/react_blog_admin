import React, { memo } from 'react';

// 工具
import { Select } from 'antd';
import { TagInputWrapper } from './style';

// 自定义
import { noteTags } from '@/common/local-data';

const TagInput = memo((props) => {
    const { tags, setTags } = props;
    const { Option } = Select;

    return (
        <TagInputWrapper>
            <span>文章标签: </span>
            <Select
                value={tags}
                className='tag'
                mode="multiple"
                onChange={value => setTags(value)}
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