import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

// 工具
import { DiaryWrapper, TableWrapper } from './style';

// 自定义
import Header from 'c/header';
import DiaryTable from './components/table';
import { getDiaryAction, deleteDiaryAction } from './store/actionCreator';

const Diary = memo(() => {
  const dispatch = useDispatch();

  const { alldiary } = useSelector(
    state => ({
      alldiary: state.getIn(['diary', 'diary'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getDiaryAction())
  }, [dispatch]);

  // 删除日记
  const deleteDiary = id => {
    dispatch(deleteDiaryAction(id));
  };

  return (
    <DiaryWrapper className='content'>
      <Header title='添加日记' link='/admin/addDiary' />
      <TableWrapper>
        <DiaryTable data={alldiary} deleteDiary={deleteDiary}/>
      </TableWrapper>
    </DiaryWrapper>
  )
})

export default Diary;