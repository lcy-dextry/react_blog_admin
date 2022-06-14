import React, { memo, useState } from 'react';

// 工具
import { AddDiaryWrapper, ContentWrapper, HeaderWapper } from './style';
import { Input, Select, Button, message } from 'antd';
import { nanoid } from 'nanoid';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { useDispatch } from 'react-redux';
import { emoji } from '@/common/local-data';

// 自定义
import { addDiaryAction } from './store/actionCreator';
import MyButton from 'c/jump-button';


const AddDiary = memo(() => {
  const dispatch = useDispatch();

  const { Option } = Select;
  const [content, setContent] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');
  const [feeling, setFeeling] = useState('😄');

  // 配置marked
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: code => hljs.highlightAuto(code).value,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: false
  })

  // markdown预览
  const changeContent = e => {
    setContent(e.target.value);
    let html = marked(e.target.value);
    setMarkdownContent(html);
  }

  // 发布日记
  const addDiary = () => {
    if (!content) {
      message.error('请编辑内容');
      return false;
    }
    else if (!feeling) {
      message.error('请选择心情');
      return false;
    }
    else {
      dispatch(addDiaryAction(content, markdownContent, feeling));
      message.success('发布成功');
    }
  }

  const addDiaryClick = () => {
    addDiary();
    setFeeling('😄')
    setContent('');
  }

  return (
    <AddDiaryWrapper className='content'>
      <HeaderWapper>
        <Button className='btn' onClick={addDiaryClick}>发表日记</Button>
        <MyButton url={'/admin/diary'} text={'返回'} />
        <Select
          className='feeling'
          value={feeling}
          style={{
            width: 120,
          }}
          dropdownStyle={{ height: '200px' }}
          onChange={value => setFeeling(value)}
        >
          {
            emoji.map(item => {
              return <Option key={nanoid()} value={item}>{item}</Option>
            })
          }
        </Select>
      </HeaderWapper>
      <ContentWrapper>
        <Input.TextArea
          value={content}
          className='textarea'
          onChange={changeContent} />
        <div className='show-html'
          dangerouslySetInnerHTML={{ __html: marked(content).replace(/<pre>/g, "<pre id='hlsj'>") }} />
      </ContentWrapper>
    </AddDiaryWrapper>
  )
})

export default AddDiary