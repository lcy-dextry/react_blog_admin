import React, { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// 工具
import { AddGalleryWrapper, ContentWrapper, HeaderWrapper } from './style'
import { Button, message } from 'antd';
import { nanoid } from 'nanoid';
import qs from 'qs';

// 自定义
import MyButton from 'c/jump-button';
import { Input } from 'antd';
import { addGalleryAction, updateGalleryAction } from './store/actionCreator';
import { getGalleryAction } from '../pic/store/actionCreator';

const AddGallery = memo(() => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [sketch, setSketch] = useState('');
  const [cover, setCover] = useState('');
  const [pics, setPics] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState('');
  const [isJudged, setIsJudged] = useState(false);

  // 获取所有图库
  const { allgallery } = useSelector(
    state => ({
      allgallery: state.getIn(['gallery', 'gallery'])
    }), shallowEqual)

  useEffect(() => {
    dispatch(getGalleryAction())
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

  // 获取修改相册详情
  const getDetail = () => {
    const detailObj = allgallery.filter(item => item._id === id)[0];

    const { title, sketch, cover, pics } = detailObj;
    setTitle(title);
    setSketch(sketch);
    setCover(cover);
    setPics(pics);
  };

  // 自动填入相册详情
  useEffect(() => {
    if (!isJudged) return;
    if (!isEdit) {
      return;
    }
    getDetail();
  }, [allgallery, document.location.search]);

  // 添加相册
  const addGallery = () => {
    if (!title) {
      message.error('请输入标题');
      return false;
    }
    else if (!sketch) {
      message.error('请输入简介');
      return false;
    }
    else if (!cover) {
      message.error('请设置封面');
      return false;
    }
    else if (!pics) {
      message.error('请添加图片');
      return false;
    }
    else {
      const Edit = document.location.search !== '' ? true : false;
      if (Edit) {
        dispatch(updateGalleryAction(title, sketch, cover, pics, id));
        message.success('修改成功');
      } else {
        dispatch(addGalleryAction(title, sketch, cover, pics));
        message.success('添加成功');
      }
    }
  }

  const addGalleryClick = () => {
    addGallery();
    setTitle('');
    setSketch('');
    setCover('');
    setPics([]);
  }

  return (
    <AddGalleryWrapper className='content'>
      <HeaderWrapper>
        <MyButton url={'/admin/pic'} text={'返回'} />
        <Button className='btn-add' onClick={addGalleryClick}>添加</Button>
      </HeaderWrapper>
      <ContentWrapper>
        <div className='left-part'>
          <div className='ipt-1'>
            <div className='title'>标题:</div>
            <Input
              className='input-box'
              value={title}
              style={{ height: '40px' }}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div className='ipt-2'>
            <div className='title'>描述:</div>
            <Input
              className='input-box'
              value={sketch}
              style={{ height: '40px' }}
              onChange={e => setSketch(e.target.value)}
            />
          </div>
          <div className='ipt-3'>
            <div className='title'>封面:</div>
            <Input
              className='input-box'
              value={cover}
              style={{ height: '40px' }}
              onChange={e => setCover(e.target.value)}
            />
          </div>
          <div className='ipt-4'>
            <div className='title'>图片:</div>
            <Input.TextArea
              value={pics.join(`\n`)}
              className='input-box'
              style={{ height: '500px' }}
              onChange={e => setPics(e.target.value.split(`\n`))}
            />
          </div>
        </div>
        <div className='right-part'>
          <ul>
            {pics.map(item => (
              <li
                key={nanoid()}
                style={{
                  backgroundImage: `url(${item})`,
                }}
              ></li>
            ))}
          </ul>
        </div>
      </ContentWrapper>
    </AddGalleryWrapper>
  )
})

export default AddGallery
