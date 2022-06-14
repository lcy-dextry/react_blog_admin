import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 工具
import { HeaderWrapper, NotesWrapper, TableWrapper } from './style';
import { Button, Input } from 'antd';
import { RedoOutlined } from '@ant-design/icons';
import { isContained } from '@/utils/function';

// 自定义
import TypeInput from './components/type-input';
import TagInput from './components/tag-input';
import AddBtn from 'c/add-btn';
import NotesTable from './components/table';
import { deleteNotesAction, getNotesAction } from './store/actionCreator';


const Notes = memo(() => {
  const dispatch = useDispatch();
  const [notesShow, setNotesShow] = useState([]);
  const [type, setType] = useState('请选择文章类型');
  const [tags, setTags] = useState([]);

  const { allnotes } = useSelector(
    state => ({
      allnotes: state.getIn(['notes', 'notes'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getNotesAction())
  }, [dispatch]);

  useEffect(() => {
    setNotesShow(allnotes);
  }, [allnotes])

  // 关键字搜索文章
  const searchByWords = (value) => {
    const keyWords = value.toLowerCase();
    if (!keyWords) {
      setNotesShow(allnotes);
      return;
    }
    const newNotesShow = allnotes.filter(
      item => item.title.toLowerCase().indexOf(keyWords) !== -1
    );
    setNotesShow(newNotesShow);
  };

  // 类型搜索文章
  const searchByType = type => {
    if (!type) {
      setNotesShow(allnotes);
      return;
    }
    const newNotesShow = allnotes.filter(item => item.type === type);
    setNotesShow(newNotesShow);
  };

  // 标签搜索文章
  const searchByTag = tags => {
    if (tags.length === 0) {
      setNotesShow(allnotes);
      return;
    }
    const notesLen = allnotes.length;
    const notesByTag = [];
    for (let i = 0; i < notesLen; i++) {
      if (isContained(allnotes[i].tags, tags)) {
        notesByTag.push(allnotes[i]);
      }
    }
    setNotesShow(notesByTag);
  };

  // 重置搜索
  const reset = () => {
    setType('');
    setTags([]);
    setNotesShow(allnotes);
  }

  // 删除笔记
  const deleteNote = id => {
    dispatch(deleteNotesAction(id));
  };

  return (
    <NotesWrapper className='content'>
      <HeaderWrapper>
        <AddBtn
          title='添加笔记'
          link='/admin/addNote' />
        <Input.Search
          className='input-1'
          defaultValue="输入文章标题..."
          onClick={e => e.target.value = ''}
          onSearch={searchByWords}
        />
        <TypeInput
          type={type}
          setType={setType}
          searchByType={searchByType} />
        <TagInput
          tags={tags}
          setTags={setTags}
          searchByTag={searchByTag} />
        <Button
          className='reset'
          onClick={reset}>
          <RedoOutlined />
        </Button>
      </HeaderWrapper>
      <TableWrapper>
        <NotesTable data={notesShow} deleteNote={deleteNote} />
      </TableWrapper>
    </NotesWrapper>
  )
})

export default Notes