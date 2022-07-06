import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 自定义
import NotesTable from './cpns/table'

// 工具
import { DraftWrapper } from './style';
import { deleteDraftsAction, getDraftsAction } from './store/actionCreator';

const Draft = memo(() => {
  const dispatch = useDispatch();
  const [draftShow, setDraftShow] = useState([]);

  // 删除草稿
  const deleteDraft = id => {
    dispatch(deleteDraftsAction(id));
  };

  const { alldrafts } = useSelector(
    state => ({
      alldrafts: state.getIn(['drafts', 'drafts'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getDraftsAction())
  }, [dispatch]);

  useEffect(() => {
    setDraftShow(alldrafts);
  }, [alldrafts])

  return (
    <DraftWrapper className='content'>
      <NotesTable data={draftShow} deleteNote={deleteDraft}/>
    </DraftWrapper>
  )
})

export default Draft