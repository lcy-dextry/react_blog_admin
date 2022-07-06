import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// 工具
import { Input, Button, message } from 'antd';
import { AddDraftWrapper, ContentWrapper, HeaderWrapper } from './style'
import { marked } from 'marked';
import hljs from 'highlight.js';
import qs from 'qs';
import moment from 'moment';

// 自定义
import TypeInput from './components/type-input';
import TagInput from './components/tag-input';
import DateSelector from './components/date-selector';
import { deleteDraftsAction, getDraftsAction } from '../drafts/store/actionCreator';
import { updateNotesAction, addNotesAction, updateDraftsAction, addDraftAction } from '../add-note/store/actionCreator';

const AddDraft = memo(() => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('请输入标题...');
  const [titleEng, setTitleEng] = useState('请输入英文标题...');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState('');
  const [markdownContent, setMarkdownContent] = useState('');

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');
  const [isJudged, setIsJudged] = useState(false);

  // 获取所有草稿
  const { alldrafts } = useSelector(
    state => ({
      alldrafts: state.getIn(['drafts', 'drafts'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getDraftsAction())
  }, [dispatch]);

  // 判断是否为修改页面
  useEffect(() => {
    const Edit = document.location.search !== '' ? true : false;
    if (Edit) {
      const params = qs.parse(document.location.search.slice(1));
      const { id } = params;
      setId(id);
    }
    setIsEdit(Edit);
    setIsJudged(true);
  }, [document.location.search]);

  // 自动填入笔记详情
  useEffect(() => {
    if(! alldrafts.length) return;
    if (!isJudged) return;
    if (!isEdit) {
      setDate(moment().format('YYYY-MM-DD HH:mm:ss').replace(/ /g, ' '));
      return;
    } else {
      const detailObj = alldrafts.filter(item => item._id === id)[0]
      const { title, titleEng, content, markdownContent, tags, type, date } = detailObj;
      setTitle(title);
      setTitleEng(titleEng);
      setTags(tags);
      setType(type);
      setMarkdownContent(markdownContent)
      setContent(content);
      setDate(date);
    }
  }, [alldrafts, document.location.search]);

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

  // 发布笔记
  const addNotes = () => {
    if (!title) {
      message.error('请输入标题');
      return false;
    }
    else if (!titleEng) {
      message.error('请输入英文标题');
      return false;
    }
    else if (!type) {
      message.error('请选择类型');
      return false;
    }
    else if (!tags) {
      message.error('请选择标签');
      return false;
    }
    else if (!date) {
      message.error('请选择日期');
      return false;
    }
    else if (!content) {
      message.error('请编辑内容');
      return false;
    }
    else {
      dispatch(addNotesAction(title, titleEng, content, markdownContent, tags, type, date));
      dispatch(deleteDraftsAction(id));
      message.success('发布成功');
    }
  }

  function noteClick() {
    addNotes();
    setTitle('');
    setTitleEng('');
    setType('');
    setTags([]);
    setContent('');
    setDate('');
  }

  //保存草稿
  const saveDrafts = () => {
    if (!title) {
      message.error('请输入标题');
      return false;
    }
    else if (!titleEng) {
      message.error('请输入英文标题');
      return false;
    }
    else if (!type) {
      message.error('请选择类型');
      return false;
    }
    else if (!tags) {
      message.error('请选择标签');
      return false;
    }
    else if (!date) {
      message.error('请选择日期');
      return false;
    }
    else if (!content) {
      message.error('请编辑内容');
      return false;
    }
    else {
      dispatch(updateDraftsAction(title, titleEng, content, markdownContent, tags, type, date, id));
      message.success('修改成功');
    }
  }

  function draftClick() {
    saveDrafts();
    setTitle('');
    setTitleEng('');
    setType('');
    setTags([]);
    setContent('');
    setDate('');
  }

  return (
    <AddDraftWrapper className='content'>
      <HeaderWrapper>
        <div className='title-input'>
          <Input
            value={title}
            className='input-1'
            onClick={e => e.target.value = ''}
            onChange={e => setTitle(e.target.value)} />
          <Input
            value={titleEng}
            className='input-2'
            onClick={e => e.target.value = ''}
            onChange={e => setTitleEng(e.target.value)} />

          <Button className='btn-1' onClick={draftClick}>存为草稿</Button>
          <Button className='btn-2' onClick={noteClick}>发布文章</Button>
        </div>

        <div className='title-intro'>
          <TypeInput type={type} setType={setType} />
          <TagInput tags={tags} setTags={setTags} />
          <DateSelector date={date} setDate={setDate} />
        </div>
      </HeaderWrapper>
      <ContentWrapper>
        <Input.TextArea
          value={content}
          className='textarea'
          onChange={changeContent} />
        <div className='show-html'
          dangerouslySetInnerHTML={{ __html: marked(content).replace(/<pre>/g, "<pre id='hlsj'>") }} />
      </ContentWrapper>
    </AddDraftWrapper>
  )
})
export default AddDraft;