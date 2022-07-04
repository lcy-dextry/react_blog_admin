import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// 工具
import { ContentWrapper, PictureWrapper } from './style';
import { nanoid } from 'nanoid';

// 自定义
import Header from 'c/header';
import PicCard from 'c/pic-card';
import { getGalleryAction } from './store/actionCreator';

const Picture = memo(() => {
  const dispatch = useDispatch();
  // 获取所有图库
  const { allgallery } = useSelector(
    state => ({
      allgallery: state.getIn(['gallery', 'gallery'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getGalleryAction())
  }, [dispatch]);

  return (
    <PictureWrapper className='content'>
      <Header title='添加相册' link='/admin/addGallery' />
      <ContentWrapper>
        {
          allgallery.map(item => {
            const info = { url: item.cover, type: item.title, desc: item.sketch };
            return (
              <NavLink key={nanoid()} to={`/admin/addGallery?id=${item._id}`}>
                <PicCard info={info} />
              </NavLink>
            )
          })
        }
      </ContentWrapper>
    </PictureWrapper>
  )
})

export default Picture